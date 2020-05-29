<template>
  <q-page>
    <header-back to="/"/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="teal-5"
        to="/group"
      />
    </q-page-sticky>
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
import handlerFormMixin from '../../infrastructure/view/mixins/handlerFormMixin'
import TableComponent from '../../infrastructure/view/components/table/TableComponent'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import HeaderBack from '../components/HeaderBack'

export default {
  name: 'Groups',
  data () {
    return {
      controllerDelete: GroupControllerBuilder.delete(),
      controllerFindAll: GroupControllerBuilder.findAll(),
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
      data: []
    }
  },
  mixins: [
    handlerFormMixin
  ],
  components: {
    TableComponent,
    HeaderBack
  },
  methods: {
    afterSuccessDelete () {
      this.showAlert('Success to delete data!', 'green', 'thumb_up')
      this.loadData()
    },
    delete (emit) {
      this.controllerDelete.delete(emit.id)
      this.afterSuccessDelete()
      this.loadData()
    },
    edit (group) {
      this.$router.push(`/group/${group.id}`)
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
