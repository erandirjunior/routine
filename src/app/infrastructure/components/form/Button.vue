<template>
  <q-btn
    :flat="field.flat"
    :outline="field.outline"
    :push="field.push"
    :pussy="field.pussy"
    :unelevated="field.unelevated"
    :rounded="field.rounded"
    :fab="field.fab"
    :color="field.color"
    :label="field.label"
    :align="field.align"
    :round="field.round"
    :class="field.inputClass"
    :text-color="field.textColor"
    @click="action(field.click, form)"
  />
</template>

<script>
export default {
  name: 'Button',
  props: {
    field: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  methods: {
    action (action) {
      this.$emit('action', { action: action, value: this.form })
    }
  }
}
</script>

<style scoped>

</style>
