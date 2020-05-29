<template>
  <q-page>
    <header-back to="/"/>
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
      @action="action"
    />
  </q-page>
</template>

<script>
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'
import TableComponent from '../../infrastructure/view/components/table/TableComponent'
import alert from '../../infrastructure/components/alert/Alert'
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
    action (action) {
      this[action.action](action.id)
      console.log(action)
    },
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
    delete (id) {
      this.controllerDelete.delete(id)
        .then(() => {
          alert('Success to delete task!', 'positive', 'thumb_up')
          this.loadTasks(this.select)
        })
    },
    edit (id) {
      this.$router.push(`task/${id}`)
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
