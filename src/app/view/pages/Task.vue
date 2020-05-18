<template>
  <q-page class="q-pa-xs">
    <q-header elevated class="primary-bg-color">
      <q-toolbar>
        <q-btn
          round
          flat
          icon="keyboard_arrow_left"
          color="white"
          stack
          to="/"
        />
        <q-space/>
        <q-btn
          round
          flat
          icon="done_outline"
          color="white"
          stack
          @click="finishFullTask"
          v-if="!!form.id"
        />
      </q-toolbar>
    </q-header>
    <form-factory
      :fields="fields"
      :form="form"
      :validation="$v"
      @formAction="action"/>
    <q-separator dark style="height: 5px;"/>
    <div class="row q-gutter-xs secondary-bg-color">
      <div class="col-xs-12">
        <list-action-component
          style="margin: 0% 5%"
          section="name"
          :data="form.tasks"
          :buttons="buttons.getFields()"
          @action="action"
        />
      </div>
    </div>
    <q-btn
      style="margin-top: 10px"
      class="full-width"
      color="teal-5"
      label="SAVE"
      v-if="showSaveButton()"
      @click="submit"
    />
  </q-page>
</template>

<script>
import TaskBuilder from '../../infrastructure/builder/forms/TaskBuilder'
import FormFactory from '../../infrastructure/components/form/FormFactory'
import handlerFormMixin from '../../infrastructure/mixins/handlerFormMixin'
import { required } from 'vuelidate/lib/validators'
import ListButtonBuilder from '../../infrastructure/builder/forms/ListButtonBuilder'
import ListActionComponent from '../../infrastructure/components/list/ListActionComponent'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskItemControllerBuilder from '../../infrastructure/builder/controller/TaskItemControllerBuilder'

export default {
  name: 'PageIndex',
  data () {
    return {
      fields: new TaskBuilder(),
      buttons: new ListButtonBuilder(),
      controllerFind: TaskControllerBuilder.find(),
      groupController: GroupControllerBuilder.findAll(),
      controllerCreate: TaskControllerBuilder.create(),
      controllerUpdate: TaskControllerBuilder.update(),
      controllerFinish: TaskControllerBuilder.finish(),
      controllerTaskItemFind: TaskItemControllerBuilder.findByTaskId(),
      controllerTaskItemDelete: TaskItemControllerBuilder.delete(),
      controllerTaskItemCreate: TaskItemControllerBuilder.create(),
      controllerTaskItemUpdate: TaskItemControllerBuilder.update(),
      step: 1,
      form: {
        id: '',
        title: '',
        taskTitle: '',
        tasks: [],
        groupId: '',
        date: '',
        repeat: false,
        finalDate: ''
      }
    }
  },
  mixins: [
    handlerFormMixin
  ],
  components: {
    FormFactory,
    ListActionComponent
  },
  validations: {
    form: {
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
    finishFullTask () {
      this.controllerFinish.finish(this.form.id)
        .then(() => {
          this.showAlert('Success to finish task!', 'green', 'thumb_up')
          this.clearForm()
        })
    },
    submit () {
      return this.form.id ? this.update() : this.create()
    },
    saveItem (item) {
      if (this.form.id) {
        this.controllerTaskItemCreate
          .create([item], this.form.id)
          .then(() => this.loadTaskItems('Success to save task item', 'green', 'thumb_up'))
      }
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
      this.form.finalDate = ''
      this.form.repeat = false
    },
    showSaveButton () {
      return this.form.tasks.length > 0
    },
    createObjectItem () {
      const position = this.form.tasks.length
      return {
        name: this.form.taskTitle,
        position: position,
        finished: false
      }
    },
    add () {
      if (this.form.taskTitle) {
        const item = this.createObjectItem()
        this.form.taskTitle = ''

        if (this.form.id) {
          return this.saveItem(item)
        }

        this.form.tasks.push(item)
      }
    },
    remove (emit) {
      const position = emit.action.value.position

      if (this.form.id) {
        return this.deleteItem(position)
      }

      this.removePropertyForm(position)
    },
    deleteItem (position) {
      const id = this.form.tasks[position].id
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
    loadGroups () {
      this.groupController.findAll()
        .then(data => {
          const items = data.map(item => {
            return { label: item.name, value: item.id }
          })

          this.fields.addOptions(items)
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
      this.form.tasks.push({
        id: id,
        name: name,
        position: position,
        finished: finished
      })
    },
    finishTask (emit) {
      const id = emit.action.value.id
      const finished = emit.action.value.finished ? 0 : 1
      const position = emit.action.value.position

      if (this.form.id) {
        return this.updateStatusItem(id, finished)
      }

      this.form.tasks[position].finished = finished
    },
    updateStatusItem (id, finished) {
      this.controllerTaskItemUpdate
        .update(id, finished)
        .then(() => {
          this.loadTaskItems('Success in updating task item status!', 'green', 'thumb_up')
        })
    },
    findDataById () {
      this.controllerFind.find(this.id)
        .then(resp => {
          this.form.id = resp.id
          this.form.repeat = true
          this.form.groupId = resp.groupId
          this.form.date = resp.date
          this.form.finalDate = resp.created
          this.form.title = resp.name
          resp.tasks.forEach(task => {
            const position = this.form.tasks.length
            this.addTaskItem(task.id, task.name, position, task.finished)
          })
        })
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
  .q-checkbox__bg {
    border-radius: 50% !important;
  }
</style>
