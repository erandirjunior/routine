<template>
  <q-page class="q-pa-xs">
    <form-factory :fields="fields" :form="form" @formAction="action"/>
    <q-btn
      style="margin-top: 10px"
      class="full-width"
      color="teal-5"
      label="SAVE"
      v-if="showSaveButton"
      @click="create"
    />
  </q-page>
</template>

<script>
import TaskBuilder from '../../infrastructure/builder/TaskBuilder'
import FormFactory from '../../infrastructure/components/form/FormFactory'
import handlerFormMixin from '../../infrastructure/mixins/handlerFormMixin'
import TaskController from '../../application/controllers/TaskController'
import GroupController from '../../application/controllers/GroupController'

export default {
  name: 'PageIndex',
  data () {
    return {
      fields: new TaskBuilder(),
      controller: new TaskController(),
      groupController: new GroupController(),
      step: 1,
      form: {
        title: '',
        activityTitle: '',
        activity: [],
        check: [],
        groupId: '',
        startDate: '',
        finalDate: '',
        repeat: false
      }
    }
  },
  mixins: [
    handlerFormMixin
  ],
  components: {
    FormFactory
  },
  methods: {
    showSaveButton () {
      return this.form.activity.length > 0
    },
    add () {
      if (this.form.activityTitle) {
        this.form.activity.push(this.form.activityTitle)
        this.form.check.push(false)
        this.form.activityTitle = ''
        const length = this.form.activity.length
        this.fields.addActivityLine(length - 1)
      }
    },
    remove (emit) {
      const position = emit.action.field.position
      this.removePropertyForm(position)
      this.fields.resetFields()
      this.createFields()
    },
    removePropertyForm (position) {
      this.form.activity = this.form.activity.filter((item, index) => {
        return index !== position
      })
    },
    createFields () {
      this.form.activity.forEach((item, index) => {
        this.fields.addActivityLine(index)
      })
    },
    loadGroups () {
      this.groupController.index()
        .then(data => {
          const items = data.map(item => {
            return { label: item.name, value: item.id }
          })

          this.fields.addOptions(items)
        })
    }
  },
  created () {
    this.loadGroups()
  }
}
</script>

<style>
  .q-checkbox__bg {
    border-radius: 50% !important;
  }
</style>
