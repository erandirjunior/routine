<template>
  <q-icon
    :color="field.color"
    :style="field.style"
    :class="field.classStyle"
    :name="field.icon"
    :size="field.size"
    v-if="!field.hide(form, field)"
  />
</template>

<script>
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

export default {
  name: 'Icon',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
