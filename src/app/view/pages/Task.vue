<template>
  <q-page class="q-pa-xs">
    <header-action :id="form.id" @finishTask="finishFullTask"/>

    <form-factory
      :fields="fields"
      :form="form"
      :validation="$v"
      @formAction="action"/>

    <q-separator dark style="height: 5px;"/>

    <div class="row q-gutter-xs secondary-bg-color">
      <div class="col-xs-12">
        <list-action-component
          position-components="before"
          style="margin: 0% 5%"
          section="name"
          :data="form.tasks"
          :components="buttons.getFields()"
          @action="action"
          dark="true"
        />
      </div>
    </div>

    <q-footer reveal>
      <q-btn
        class="full-width"
        color="teal-5"
        label="SAVE"
        @click="submit"
      />
    </q-footer>

    <q-dialog v-model="form.repeat" position="bottom">
      <repetion :form="form.date" @close="closeDateModal" />
    </q-dialog>

    <q-dialog v-model="dialogListAction" position="bottom" style="height: 5em">
      <button-item-handler @handlerItem="action"/>
    </q-dialog>
  </q-page>
</template>

<script>
import TaskBuilder from '../../infrastructure/builder/forms/TaskBuilder'
import FormFactory from '../../infrastructure/view/components/form/FormFactory'
import handlerFormMixin from '../../infrastructure/view/mixins/handlerFormMixin'
import ButtonItemHandler from '../components/task/ButtonItemHandler'
import HeaderAction from '../components/task/HeaderAction'
import Repetion from '../components/task/Repetion'
import dateHandler from '../../infrastructure/components/date/dateHandler'
import { required } from 'vuelidate/lib/validators'
import ListBuilder from '../../infrastructure/builder/forms/ListBuilder'
import ListActionComponent from '../components/pages/ListActionComponent'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskItemControllerBuilder from '../../infrastructure/builder/controller/TaskItemControllerBuilder'

export default {
  name: 'PageIndex',
  data () {
    return {
      fields: new TaskBuilder(),
      buttons: new ListBuilder(),
      controllerFind: TaskControllerBuilder.find(),
      groupController: GroupControllerBuilder.findAll(),
      controllerCreate: TaskControllerBuilder.create(),
      controllerUpdate: TaskControllerBuilder.update(),
      controllerFinish: TaskControllerBuilder.finish(),
      controllerTaskItemFind: TaskItemControllerBuilder.findByTaskId(),
      controllerTaskItemDelete: TaskItemControllerBuilder.delete(),
      controllerTaskItemCreate: TaskItemControllerBuilder.create(),
      controllerTaskItemUpdate: TaskItemControllerBuilder.update(),
      dialogListAction: false,
      dialogDateAction: false,
      item: {},
      dateHander: dateHandler(),
      form: {
        id: '',
        title: '',
        taskTitle: '',
        tasks: [],
        groupId: '',
        repeat: false,
        date: {
          mode: '1',
          date: '',
          dates: [],
          days: []
        }
      }
    }
  },
  mixins: [
    handlerFormMixin
  ],
  components: {
    FormFactory,
    ListActionComponent,
    ButtonItemHandler,
    HeaderAction,
    Repetion
  },
  validations: {
    form: {
      title: {
        required
      },
      groupId: {
        required
      }
    }
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    closeDateModal () {
      this.form.repeat = false
    },
    openListAction (itemList) {
      this.item = itemList.value
      this.dialogListAction = !this.dialogListAction
    },
    loadGroups () {
      this.groupController.findAll()
        .then(data => {
          const items = data.map(item => {
            return {
              label: item.name,
              value: item.id,
              afterIcon: 'label',
              afterIconColor: item.color
            }
          })

          this.fields.addOptions(items)
        })
    },
    findDataById () {
      this.controllerFind.find(this.id)
        .then(resp => {
          this.form.id = resp.id
          this.form.groupId = resp.groupId
          this.form.title = resp.name
          resp.tasks.forEach(task => {
            const position = this.form.tasks.length
            this.addTaskItem(task.id, task.name, position, task.finished)
          })
        })
    },
    submit () {
      return this.form.id ? this.update() : this.create()
    },
    afterSuccessCreate () {
      this.clearForm()
      this.showAlert('Success to save data!', 'green', 'thumb_up')
    },
    clearForm () {
      this.form.title = ''
      this.form.taskTitle = ''
      this.form.tasks = []
      this.form.groupId = ''
      this.form.date = {
        mode: '1',
        date: '',
        dates: [],
        days: []
      }
    },
    handlerTaskItem () {
      if (this.form.taskTitle) {
        if (this.item.id !== undefined) {
          return this.updateDescriptionTaskItem()
        }

        return this.add()
      }
    },
    updateDescriptionTaskItem () {
      const position = this.item.position
      const id = this.form.tasks[position].id
      const finished = this.form.tasks[position].finished ? 1 : 0
      const description = this.form.taskTitle
      this.fields.modifyIconButton('add')
      this.resetFields()

      if (id) {
        return this.updateTaskItem(id, finished, description)
      }

      this.form.tasks[position].name = description
    },
    resetFields () {
      this.item = {}
      this.form.taskTitle = ''
    },
    updateTaskItem (id, finished, description) {
      this.controllerTaskItemUpdate
        .update(id, finished, description)
        .then(() => {
          this.loadTaskItems('Success in updating task item!', 'green', 'thumb_up')
        })
    },
    loadTaskItems (message, color, icon) {
      this.controllerTaskItemFind.findByTaskId(this.form.id)
        .then(resp => {
          this.form.tasks = []
          this.showAlert(message, color, icon)
          resp.forEach(task => {
            const position = this.form.tasks.length
            this.addTaskItem(task.id, task.name, position, task.finished)
          })
        })
    },
    addTaskItem (id, name, position, finished) {
      this.form.tasks.push(this.createObjectItem(id, name, position, finished))
    },
    add () {
      const position = this.form.tasks.length
      const item = this.createObjectItem(0, this.form.taskTitle, position, 0)
      this.resetFields()

      if (this.form.id) {
        return this.saveItem(item)
      }

      this.form.tasks.push(item)
    },
    createObjectItem (id, title, position, finished) {
      return {
        id: id,
        name: title,
        position: position,
        finished: finished,
        action: 'openListAction'
      }
    },
    saveItem (item) {
      if (this.form.id) {
        this.controllerTaskItemCreate
          .create([item], this.form.id)
          .then(() => this.loadTaskItems('Success to save task item', 'green', 'thumb_up'))
      }
    },
    finishFullTask () {
      this.controllerFinish.finish(this.form.id)
        .then(() => {
          this.showAlert('Success to finish task!', 'green', 'thumb_up')
          this.clearForm()
        })
    },
    showSaveButton () {
      return this.form.tasks.length > 0
    },
    remove () {
      this.dialogListAction = !this.dialogListAction
      this.fields.modifyIconButton('add')
      const id = this.item.id
      const position = this.item.position
      this.resetFields()

      if (this.form.id) {
        return this.deleteItem(id)
      }

      this.removePropertyForm(position)
    },
    deleteItem (id) {
      this.controllerTaskItemDelete.delete(id)
        .then(() => {
          this.loadTaskItems('Success to delete task item!', 'green', 'thumb_up')
        })
    },
    removePropertyForm (position) {
      this.form.tasks = this.form.tasks.filter(item => {
        return item.position !== position
      })
    },
    finishTask () {
      this.dialogListAction = !this.dialogListAction
      const finished = this.item.finished ? 0 : 1

      if (this.form.id) {
        return this.updateTaskItem(
          this.item.id,
          finished,
          this.item.name
        )
      }

      this.form.tasks[this.item.position].finished = finished
    },
    editTask () {
      this.dialogListAction = !this.dialogListAction
      this.form.taskTitle = this.item.name
      this.fields.modifyIconButton('save')
    },
    cleanItemAttribute () {
      this.item = {}
    }
  },
  created () {
    this.loadGroups()
    if (this.id) {
      this.findDataById()
    }
  }
}
</script>

<style>
</style>
