<template>
  <q-page class="q-pa-xs">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        class="secondary-bg-color"
        color="#282828"
        to="/group"
      />
    </q-page-sticky>
    <table-component
      :columns="columns"
      :data="data"
      :buttons="buttons"
      @action="action"
    />
  </q-page>
</template>

<script>
import handlerFormMixin from '../../infrastructure/mixins/handlerFormMixin'
import TableComponent from '../components/TableComponent'
import GroupController from '../../application/controllers/GroupController'

export default {
  name: 'Groups',
  data () {
    return {
      controller: new GroupController(),
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
    TableComponent
  },
  methods: {
    edit (emit) {
      this.$router.push(`/group/${emit.id}`)
    },
    delete (emit) {
      this.controller.delete(emit.id)
      this.loadData()
    },
    loadData () {
      this.controller.index()
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
