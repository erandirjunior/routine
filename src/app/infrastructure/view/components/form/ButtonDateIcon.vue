<template>
  <q-btn
    :icon="field.icon"
    :flat="field.flat"
    :outline="field.outline"
    :push="field.push"
    :pussy="field.pussy"
    :unelevated="field.unelevated"
    :rounded="field.rounded"
    :fab="field.fab"
    :round="field.round"
    :color="field.color"
    :class="field.inputClass"
    :style="field.style"
    :disable="field.disable(field, form)"
    v-if="field.showInput(field, form)"
  >
    <q-popup-proxy transition-show="scale" transition-hide="scale">
      <q-date v-model="model" v-close-popup :mask="field.mask"/>
    </q-popup-proxy>
  </q-btn>
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'ButtonDateIcon',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
