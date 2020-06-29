<template>
  <q-radio
    :class="field.class"
    :color="field.color"
    :disable="field.disable(form, field)"
    :style="field.style"
    v-if="!field.hide(form, field)"
    v-model="model"
    :error="error"
    :error-message="field.errorMessage"
    @input="input"
    :keep-color="field.keepColor"
    :left-label="field.leftLabel"
    :dark="field.dark"
    :val="field.val"
    :label="field.label"
    :size="field.size"
  />
</template>

<script>
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

export default {
  name: 'Radio',
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
