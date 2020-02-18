<template>
  <q-page class="q-pa-sm">
    <form-factory :fields="fields" :form="form" @action="action"/>
  </q-page>
</template>

<script>
import TaskBuilder from '../../infrastructure/form/TaskBuilder'
import FormFactory from '../../infrastructure/components/form/FormFactory'
export default {
  name: 'PageIndex',
  data () {
    return {
      fields: new TaskBuilder(),
      form: {
        title: '',
        activity: [''],
        check: [false]
      }
    }
  },
  components: {
    FormFactory
  },
  methods: {
    action (emit) {
      this[emit.action.action]()
    },
    add () {
      this.form.activity.push('')
      this.form.check.push(false)
      const length = this.form.activity.length
      this.fields.addActivityLine(length - 1)
    }
  }
}
</script>
