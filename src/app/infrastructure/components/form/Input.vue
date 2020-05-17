<template>
  <q-input
    :ref="field.model"
    v-model="model"
    :dense="field.dense"
    :label="field.title"
    :color="field.color"
    :dark="field.darkMode"
    :class="field.inputClass"
    :disable="field.disable(field, form)"
    :readonly="field.readonly(field, form)"
    :style="field.style"
    :filled="field.filled"
    :outlined="field.outlined"
    :square="field.square"
    :standout="field.standout"
    :rounded="field.rounded"
    :borderless="field.borderless"
    v-if="field.show(field, form)"
    :error="error"
    :error-message="field.errorMessage"
  />
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Input',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
