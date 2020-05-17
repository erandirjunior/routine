<template>
  <q-checkbox
    v-model="model"
    :color="field.color"
    :dark="field.dark"
    :disable="field.disable(field, form)"
    :label="field.title"
    :class="field.inputClass"
    :style="field.style"
    size="xl"
    keep-color
    :error="error"
    :error-message="field.errorMessage"
    v-if="field.show(field, form)"
  />
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'CheckBox',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
