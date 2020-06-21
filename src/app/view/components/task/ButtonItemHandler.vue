<template>
  <q-btn-group spread>
    <q-btn
      color="teal-5"
      icon="done"
      @click="handlerItem('finishTask')"
    />
    <q-btn
      color="warning"
      icon="edit"
      @click="handlerItem('editTask')"
    />
    <q-btn
      color="red"
      icon="delete"
      @click="handlerItem('remove')"
    />
  </q-btn-group>
</template>

<script>
import handlerActionMixin from 'src/app/infrastructure/view/mixins/handlerActionMixin'

export default {
  name: 'ButtonItemHandler',
  mixins: [
    handlerActionMixin
  ],
  methods: {
    handlerItem (action) {
      this.$emit('handlerItem', { action })
    }
  }
}
</script>
