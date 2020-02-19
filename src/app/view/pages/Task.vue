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
      console.log(emit)
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
      this.fields.removeActivityLine(position)
    },
    removePropertyForm (position) {
      this.form.activity = this.form.activity.filter((item, index) => {
        return index !== position
      })
    }
  }
}
</script>
