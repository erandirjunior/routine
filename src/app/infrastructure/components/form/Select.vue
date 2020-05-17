<template>
  <div>
    <q-select
      filled
      :label="field.title"
      :color="field.color"
      :dark="field.darkMode"
      :class="field.inputClass"
      :disable="field.disable(field, form)"
      :readonly="field.readonly(field, form)"
      v-model="model"
      :style="field.style"
      :options="field.options"
      :option-value="field.optionValue"
      :option-label="field.optionLabel"
      emit-value
      map-options
      :error="error"
      :error-message="field.errorMessage"
    />
  </div>
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Select',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
