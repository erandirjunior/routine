<template>
  <q-input
    type="textarea"
    v-model="form[field.model]"
    :label="field.title"
    :dark="field.darkMode"
    :color="field.color"
  />
</template>

<script>
export default {
  name: 'Textarea',
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
