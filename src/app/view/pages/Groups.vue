<template>
  <q-page>
    <header-back></header-back>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="teal-5"
        @click="enableAddButton()"
        v-if="!show"
      />
    </q-page-sticky>
    <table-component
      :columns="columns"
      :data="data"
      :buttons="buttons"
      :style-class="styleClass"
      @action="action"
    />
    <div v-if="show" style="margin-top: 10%">
      <form-factory
        :fields="fields"
        :form="form"
        :validation="$v"
        @formAction="action"
      />
    </div>
  </q-page>
</template>

<script>
import handlerFormMixin from '../../infrastructure/mixins/handlerFormMixin'
import TableComponent from '../../infrastructure/components/table/TableComponent'
import GroupBuilder from '../../infrastructure/builder/forms/GroupBuilder'
import FormFactory from '../../infrastructure/components/form/FormFactory'
import { required } from 'vuelidate/lib/validators'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import HeaderBack from '../components/HeaderBack'

export default {
  name: 'Groups',
  data () {
    return {
      controllerCreate: GroupControllerBuilder.create(),
      controllerUpdate: GroupControllerBuilder.update(),
      controllerDelete: GroupControllerBuilder.delete(),
      controllerFind: GroupControllerBuilder.find(),
      controllerFindAll: GroupControllerBuilder.findAll(),
      fields: new GroupBuilder(),
      styleClass: {
        cardClass: 'secondary-bg-color',
        tableClass: 'text-teal-5',
        tableHeaderClass: 'white'
      },
      buttons: [
        {
          icon: 'edit',
          color: 'light-blue',
          action: 'edit',
          class: 'q-mr-sm',
          tooltip: {
            offset: [0, 5],
            title: 'Editar'
          }
        },
        {
          icon: 'delete',
          color: 'negative',
          action: 'delete',
          class: 'q-mr-xs',
          tooltip: {
            offset: [0, 5],
            title: 'Excluir'
          }
        }
      ],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          sortable: true
        },
        {
          name: 'actions',
          align: 'center',
          label: 'Action',
          field: row => row.actions,
          sortable: true
        }
      ],
      data: [],
      show: false,
      form: {
        name: '',
        id: ''
      }
    }
  },
  mixins: [
    handlerFormMixin
  ],
  components: {
    TableComponent,
    FormFactory,
    HeaderBack
  },
  validations: {
    form: {
      name: {
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
    },
    afterSuccessUpdate () {
      this.showAlert('Sucess to update data!', 'green', 'thumb_up')
      this.afterAction()
    },
    afterSuccessCreate () {
      this.showAlert('Success to save data!', 'green', 'thumb_up')
      this.afterAction()
    },
    afterSuccessDelete () {
      this.showAlert('Success to delete data!', 'green', 'thumb_up')
      this.clearForm()
      this.show = false
    },
    afterAction () {
      this.clearForm()
      this.loadData()
      this.enableAddButton()
    },
    enableAddButton () {
      this.show = !this.show
      return this.show
    },
    delete (emit) {
      this.controllerDelete.delete(emit.id)
      this.afterSuccessDelete()
      this.loadData()
    },
    edit (action) {
      this.controllerFind.find(action.id)
        .then(result => {
          this.form.name = result.name
          this.form.id = result.id
          this.enableAddButton()
        })
    },
    loadData () {
      this.controllerFindAll.findAll()
        .then(data => {
          this.data = data
        })
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style>
  .q-table__card {
    box-shadow: none;
  }
</style>
