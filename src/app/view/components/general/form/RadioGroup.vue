<template>
  <q-option-group
    :class="field.class"
    :color="field.color"
    :disable="field.disable(form, field)"
    :style="field.style"
    v-if="!field.hide(form, field)"
    v-model="model"
    :error="error"
    :error-message="field.errorMessage"
    :keep-color="field.keepColor"
    :left-label="field.leftLabel"
    :dark="field.dark"
    :type="field.type"
    :options="field.options"
    :dense="field.dense"
    :inline="field.inline"
    :size="field.size"
    @input="input"
  />
</template>

<script>
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

export default {
  name: 'RadioGroup',
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
