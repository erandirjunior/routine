<template>
  <q-btn
    :class="field.class"
    :color="field.color"
    :disable="field.disable(form, field)"
    :style="field.style"
    v-if="!field.hide(form, field)"
    :flat="field.flat"
    :outline="field.outline"
    :push="field.push"
    :pussy="field.pussy"
    :unelevated="field.unelevated"
    :fab="field.fab"
    :round="field.round"
    :rounded="field.rounded"
    :no-caps="field.noCaps"
    :text-color="field.textColor"
    :label="field.label"
    :align="field.align"
    :size="field.size"
    :no-wrap="field.noWrap"
    :type="field.type"
    :to="field.to"
    :ripple="field.ripple"
    @click="action"
    :padding="field.padding"
    :icon="field.icon"
  />
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    field: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  methods: {
    action () {
      this.$emit('action', { action: this.field.click, value: '' })
    }
  }
}
</script>

<style scoped>

</style>
