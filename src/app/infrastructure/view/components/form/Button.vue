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
    :no-caps="field.noCaps"
    :round="field.round"
    :class="field.inputClass"
    :style="field.style"
    :text-color="field.textColor"
    :size="field.size"
    @click="action(field.click, form)"
  />
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Button',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
