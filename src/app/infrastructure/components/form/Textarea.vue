<template>
  <q-input
    type="textarea"
    v-model="model"
    :label="field.title"
    :dark="field.darkMode"
    :color="field.color"
    :error="error"
    :error-message="field.errorMessage"
  />
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Textarea',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
