<template>
  <div>
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      color="teal-5"
      dark
      :card-class="styleClass.cardClass"
      :table-class="styleClass.tableClass"
      :table-header-class="styleClass.tableHeaderClass"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            size="md"
            v-for="(item, index) in buttons"
            :key="index"
            :color="item.color"
            :icon="item.icon"
            class="q-mr-xs"
            @click="buttonAction(item.action, props.row.id)"
          >
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array
    },
    columns: {
      type: Array
    },
    buttons: {
      type: Array
    },
    styleClass: {
      type: Object
    }
  },
  methods: {
    buttonAction (action, id) {
      this.$emit('action', { action: action, id: id })
    }
  }
}
</script>
