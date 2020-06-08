<template>
  <div>
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
          <q-item-section avatar>
            <q-icon :name="scope.opt.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-html="scope.opt.label" />
            <q-item-label caption>{{ scope.opt.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
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
