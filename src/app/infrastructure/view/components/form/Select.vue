<template>
  <q-select
    :label="field.label"
    v-model="model"
    :filled="field.filled"
    :outlined="field.outlined"
    :square="field.square"
    :standout="field.standout"
    :rounded="field.rounded"
    :borderless="field.borderless"
    :dense="field.dense"
    :color="field.color"
    :disable="field.disable(field, form)"
    :readonly="field.readonly(field, form)"
    :dark="field.darkMode"
    :clearable="field.clearable"
    :class="field.inputClass"
    :style="field.style"
    :multiple="field.multiple"
    :options="field.options"
    :option-value="field.optionValue"
    :option-label="field.optionLabel"
    emit-value
    map-options
    v-if="field.showInput(field, form)"
    :error="error"
    :error-message="field.errorMessage"
    :behavior="field.behavior"
  >
    <template v-slot:option="scope" v-if="field.hasCustomOptions">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section avatar v-if="field.hasBeforeIcon">
          <q-icon :name="scope.opt.beforeIcon" :color="scope.opt.beforeIconColor" />
        </q-item-section>
        <q-item-section v-if="field.hasContent">
          <q-item-label v-if="field.hasLabel" v-html="scope.opt.label" />
          <q-item-label v-if="field.hasCaption" caption>{{ scope.opt.description }}</q-item-label>
        </q-item-section>
        <q-item-section avatar v-if="field.hasAfterIcon">
          <q-icon :name="scope.opt.afterIcon" :color="scope.opt.afterIconColor" />
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Select',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
