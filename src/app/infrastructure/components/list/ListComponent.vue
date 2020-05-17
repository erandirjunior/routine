<template>
  <div>
    <q-list dark separator style="max-width: 318px">
      <q-item clickable v-ripple v-for="item in data" :key="item.id" @click="action(actionName, item)">
        <q-item-section>{{ item[section] }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array
    },
    section: {
      type: String
    },
    actionName: {
      type: String
    }
  },
  methods: {
    action (action, item) {
      this.$emit('action', { action: action, item: item })
    }
  }
}
</script>
