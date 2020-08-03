<template>
  <q-page class="q-py-xs">
    <header-back to="/"/>
    <form-factory
      class-factory="row q-col-gutter-sm"
      :fields="fields"
      :form="form"
      @formAction="action"
    />
    <table-component
      :columns="columns"
      :data="data"
      :buttons="buttons"
      :style-class="styleClass"
      @action="action"
    />
  </q-page>
</template>

<script>
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'
import TableComponent from '../components/pages/TableComponent'
import alert from '../../infrastructure/components/alert/alert'
import HeaderBack from '../components/pages/HeaderBack'
import TaskSelectBuilder from 'src/app/infrastructure/builder/forms/TaskSelectBuilder'
import FormFactory from '../components/general/form/FormFactory'
import handlerActionMixin from 'src/app/view/mixins/handlerActionMixin'

export default {
  name: 'Tasks',
  data () {
    return {
      fields: new TaskSelectBuilder(),
      controllerFindAll: GroupControllerBuilder.findAll(),
      controllerDelete: TaskControllerBuilder.delete(),
      controllerFind: TaskControllerBuilder.findAllByGroup(),
      buttons: [
        {
          icon: 'edit',
          color: 'light-blue',
          action: 'edit',
          class: 'q-mr-xs',
          tooltip: {
            offset: [0, 5],
            title: 'Edit'
          }
        },
        {
          icon: 'delete',
          color: 'negative',
          action: 'delete',
          class: 'q-mr-xs',
          tooltip: {
            offset: [0, 5],
            title: 'Delete'
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
      styleClass: {
        cardClass: 'secondary-bg-color',
        tableClass: 'text-teal-5',
        tableHeaderClass: 'white'
      },
      data: [],
      form: {
        groupId: ''
      }
    }
  },
  mixins: [
    handlerActionMixin
  ],
  components: {
    TableComponent,
    HeaderBack,
    FormFactory
  },
  methods: {
    loadTasks () {
      this.controllerFind.findByIdGroup(this.form.groupId)
        .then(resp => {
          this.data = resp
        })
    },
    loadGroups () {
      this.controllerFindAll.findAll()
        .then(data => {
          this.fields.addOptions(data.map(item => {
            return {
              label: item.name,
              value: item.id,
              afterIcon: 'label',
              afterIconColor: item.color
            }
          }))
        })
    },
    delete (item) {
      this.controllerDelete.delete(item.id)
        .then(() => {
          alert('Success to delete task!', 'positive', 'thumb_up')
          this.loadTasks()
        })
    },
    edit (item) {
      this.$router.push(`task/${item.id}`)
    }
  },
  created () {
    this.loadGroups()
  }
}
</script>

<style>
  .q-table__card {
    box-shadow: none;
  }
</style>
