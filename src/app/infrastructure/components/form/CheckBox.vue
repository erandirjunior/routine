<template>
  <q-checkbox
    v-model="form[field.model]"
    :color="field.color"
    :dark="field.dark"
    :disable="field.disable"
    :label="field.label"
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
