<template>
  <q-checkbox
    v-model="model"
    :label="field.label"
    :color="field.color"
    :dark="field.darkMode"
    :class="field.class"
    :style="field.style"
    :size="field.size"
    :keep-color="field.keepColor"
    :error="error"
    :error-message="field.errorMessage"
    :disable="field.disable(form, field)"
    v-if="!field.hide(form, field)"
    @input="action(field.input)"
  />
</template>

<script>
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

export default {
  name: 'CheckBox',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
