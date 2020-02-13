<template>
  <q-page class="bg-grey-10 text-white q-pa-sm">
    <form-factory :fields="fields" :form="form"/>
    <q-btn icon="" rounded color="primary" label="Flat Rounded" />
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
        activity: [],
        check: false
      }
    }
  },
  components: {
    FormFactory
  }
}
</script>
