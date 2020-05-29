<template>
  <div>
    <q-icon
      :color="field.color"
      :style="field.style"
      :name="field.icon"
      v-if="this.field.show(field, form)"
    />
  </div>
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Icon',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
