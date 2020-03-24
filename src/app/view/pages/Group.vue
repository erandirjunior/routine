<template>
  <q-page class="q-pa-xs">
    <form-factory :fields="fields" :form="form" @formAction="action"/>
  </q-page>
</template>

<script>
import FormFactory from '../../infrastructure/components/form/FormFactory'
import handlerFormMixin from '../../infrastructure/mixins/handlerFormMixin'
import GroupBuilder from '../../infrastructure/builder/GroupBuilder'
import GroupController from '../../application/controllers/GroupController'

export default {
  name: 'Group',
  data () {
    return {
      fields: new GroupBuilder(),
      controller: new GroupController(),
      form: {
        name: '',
        id: ''
      }
    }
  },
  mixins: [
    handlerFormMixin
  ],
  props: {
    id: String
  },
  components: {
    FormFactory
  },
  methods: {
    saveData () {
      this.form.id ? this.update() : this.create()
    },
    afterCreate () {
      this.$router.push('/groups')
    },
    afterUpdate () {
      this.$router.push('/groups')
    }
  },
  created () {
    if (this.id) {
      this.controller.find(this.id)
        .then(data => {
          this.form.name = data.name
          this.form.id = data.id
        })
    }
  }
}
</script>
