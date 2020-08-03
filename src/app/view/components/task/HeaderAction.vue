<template>
  <q-header elevated class="primary-bg-color">
    <q-toolbar>
      <q-btn
        round
        flat
        icon="keyboard_arrow_left"
        color="white"
        stack
        to="/"
      />
      <q-space/>
      <q-btn
        round
        flat
        icon="done_outline"
        color="white"
        stack
        @click="action('finishFullTask')"
        v-if="!!id"
        v-go-back
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import handlerActionMixin from '../../mixins/handlerActionMixin'

export default {
  name: 'HeaderAction',
  mixins: [
    handlerActionMixin
  ],
  methods: {
    action (action) {
      this.$emit('finishTask', { action })
    }
  },
  props: {
    id: {
      required: true
    }
  }
}
</script>
