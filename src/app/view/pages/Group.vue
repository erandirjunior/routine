<template>
  <q-page class="q-pa-xs">
    <header-back to="/groups"/>
    <form-factory
      :fields="fields"
      :form="form"
      :validation="$v"
      @formAction="action"
    />
  </q-page>
</template>

<script>
import handlerFormMixin from '../../infrastructure/view/mixins/handlerFormMixin'
import GroupBuilder from '../../infrastructure/builder/forms/GroupBuilder'
import FormFactory from '../../infrastructure/view/components/form/FormFactory'
import { required } from 'vuelidate/lib/validators'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import HeaderBack from '../components/HeaderBack'

export default {
  name: 'Group',
  data () {
    return {
      controllerCreate: GroupControllerBuilder.create(),
      controllerUpdate: GroupControllerBuilder.update(),
      controllerFind: GroupControllerBuilder.find(),
      fields: new GroupBuilder(),
      data: [],
      show: false,
      form: {
        name: '',
        color: '',
        id: ''
      },
      colors: [
        'red',
        'blue',
        'yellow',
        'green',
        'orange',
        'teal',
        'cyan',
        'brown',
        'pink'
      ]
    }
  },
  props: {
    id: {
      type: String
    }
  },
  mixins: [
    handlerFormMixin
  ],
  components: {
    FormFactory,
    HeaderBack
  },
  validations: {
    form: {
      name: {
        required
      },
      color: {
        required
      }
    }
  },
  methods: {
    saveData () {
      this.form.id ? this.update() : this.create()
    },
    clearForm () {
      this.form.name = ''
      this.form.id = ''
      this.form.color = ''
    },
    afterSuccessUpdate () {
      this.showAlert('Sucess to update data!', 'green', 'thumb_up')
      this.clearForm()
    },
    afterSuccessCreate () {
      this.showAlert('Success to save data!', 'green', 'thumb_up')
      this.clearForm()
    },
    find (id) {
      this.controllerFind.find(id)
        .then(result => {
          this.form.name = result.name
          this.form.color = result.color
          this.form.id = result.id
        })
    }
  },
  created () {
    if (this.id) {
      this.find(this.id)
    }
    this.fields.addOptions(this.colors)
  }
}
</script>

<style>
</style>
