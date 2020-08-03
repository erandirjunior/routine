<template>
  <q-checkbox
    v-model="model"
    :label="field.label"
    :color="field.color"
    :dark="field.dark"
    :dense="field.dense"
    :class="field.class"
    :style="field.style"
    :size="field.size"
    :keep-color="field.keepColor"
    :error="error"
    :error-message="field.errorMessage"
    :disable="field.disable(form, field)"
    v-if="!field.hide(form, field)"
    @input="input"
  />
</template>

<script>
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

export default {
  name: 'CheckBox',
  mixins: [
    formComponentMixin
  ],
  methods: {
    input (value) {
      this.$emit('action', { action: this.field.input, value: value })
    }
  }
}
</script>

<style scoped>

</style>
