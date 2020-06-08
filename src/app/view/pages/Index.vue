<template>
  <q-page class="q-pa-xl">
    <form-factory
    :form="form"
    :fields="fields"
    />
  </q-page>
</template>

<script>
import FormFactory from '../../infrastructure/view/components/form/FormFactory'
import IndexFormBuilder from '../../infrastructure/builder/forms/IndexFormBuilder'

export default {
  name: 'PageIndex',
  components: {
    FormFactory
  },
  data () {
    return {
      fields: new IndexFormBuilder(),
      form: {
        text: '',
        select: '',
        check: false,
        radio: 1,
        date: ''
      }
    }
  }
}
</script>
