<template>
  <q-page>
    <header-back></header-back>
    <q-select
      label="Select a group"
      filled
      dark
      standout
      class="secondary-bg-color"
      style="margin-bottom: 5%"
      color="white"
      emit-value
      map-options
      option-value="id"
      option-label="name"
      v-model="select"
      :options="groups"
      @input="loadTasks"
    />
    <table-component
      :columns="columns"
      :data="data"
      :buttons="buttons"
      :style-class="styleClass"
      @action="deleteTask"
    />
  </q-page>
</template>

<script>
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'
import TableComponent from '../../infrastructure/components/table/TableComponent'
import alert from '../../infrastructure/alert/Alert'
import HeaderBack from '../components/HeaderBack'

export default {
  name: 'Tasks',
  data () {
    return {
      controllerFindAll: GroupControllerBuilder.findAll(),
      controllerDelete: TaskControllerBuilder.delete(),
      controllerFind: TaskControllerBuilder.findAllByGroup(),
      select: '',
      buttons: [
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
      styleClass: {
        cardClass: 'secondary-bg-color',
        tableClass: 'text-teal-5',
        tableHeaderClass: 'white'
      },
      data: [],
      groups: [],
      show: false,
      form: {
        name: '',
        id: ''
      }
    }
  },
  components: {
    TableComponent,
    HeaderBack
  },
  methods: {
    loadTasks (id) {
      this.controllerFind.findByIdGroup(id)
        .then(resp => {
          this.data = resp
        })
    },
    loadGroups () {
      this.controllerFindAll.findAll()
        .then(data => {
          this.groups = data
        })
    },
    deleteTask (emit) {
      this.controllerDelete.delete(emit.id)
        .then(() => {
          alert('Success to delete task!', 'positive', 'thumb_up')
          this.loadTasks(this.select)
        })
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
