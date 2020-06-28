<template>
  <q-select
    :class="field.class"
    :color="field.color"
    :disable="field.disable(form, field)"
    :style="field.style"
    v-if="!field.hide(form, field)"
    v-model="model"
    :error-message="field.errorMessage"
    :error="error"
    :filled="field.filled"
    :outlined="field.outlined"
    :square="field.square"
    :standout="field.standout"
    :rounded="field.rounded"
    :borderless="field.borderless"
    :dense="field.dense"
    :dark="field.dark"
    :clearable="field.clearable"
    :label="field.label"
    :behavior="field.behavior"
    :readonly="field.readonly(form, field)"
    :autofocus="field.autofocus"
    @input="action(field.input)"
    @focus="action(field.focus)"
    @clear="action(field.clear)"
    :multiple="field.multiple"
    :options="field.options"
    :option-value="field.optionValue"
    :option-label="field.optionLabel"
    :emit-value="field.emitValue"
    :map-options="field.mapOptions"
    :label-color="field.labelColor"
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
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

export default {
  name: 'Select',
  mixins: [
    formComponentMixin
  ]
}
</script>

<style scoped>

</style>
