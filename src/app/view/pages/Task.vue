<template>
  <q-page class="q-pa-sm">
    <form-factory :fields="fields" :form="form" @action="action"/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        class="secundary-color"
        color="#282828"
        @click="add()"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import TaskBuilder from '../../infrastructure/builder/TaskBuilder'
import FormFactory from '../../infrastructure/components/form/FormFactory'
import handlerFormMixin from '../../infrastructure/mixins/handlerFormMixin'
import TaskController from '../../application/controllers/TaskController'

export default {
  name: 'PageIndex',
  data () {
    return {
      fields: new TaskBuilder(),
      controller: new TaskController(),
      form: {
        title: '',
        activity: [''],
        check: [false]
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
    action (emit) {
      this[emit.action.action](emit)
    },
    add () {
      this.form.activity.push('')
      this.form.check.push(false)
      const length = this.form.activity.length
      this.fields.addActivityLine(length - 1)
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
    }
  }
}
</script>
