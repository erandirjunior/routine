<template>
  <q-option-group
    v-model="model"
    :options="field.options"
    :color="field.color"
    :dark="field.darkMode"
    :class="field.inputClass"
    :style="field.style"
    :size="field.size"
    :type="field.type"
    :error="error"
    :error-message="field.errorMessage"
    :disable="field.disable(field, form)"
    v-if="field.showInput(field, form)"
    :inline="field.inline"
    :dense="field.dense"
  />
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'RadioGroup',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
