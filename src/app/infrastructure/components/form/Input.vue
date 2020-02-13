<template>
  <q-input
    :ref="field.model"
    v-model="form[field.model]"
    :label="field.title"
    :color="field.color"
    :dark="field.darkMode"
    :class="field.inputClass"
  />
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    field: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
