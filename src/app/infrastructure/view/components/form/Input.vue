<template>
  <q-input
    :label="field.label"
    v-model="model"
    :type="getType()"
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
    :autogrow="field.autogrow"
    :suffix="field.suffix"
    :prefix="field.prefix"
    :class="field.inputClass"
    :style="field.style"
    v-if="field.showInput(field, form)"
    :error="error"
    :error-message="field.errorMessage"
  >
    <template v-slot:prepend v-if="field.hasPrepend">
      <q-icon :name="field.prependIcon" />
    </template>

    <template v-slot:append v-if="field.hasAppend">
      <q-icon :name="field.appendIcon" />
    </template>

    <template v-slot:hint v-if="field.hasHint">
      {{ field.textHint }}
    </template>

    <template v-slot:after v-if="field.hasAfterIcon">
      <q-btn round dense flat :icon="field.afterIcon" />
    </template>

    <template v-slot:before v-if="field.hasBeforeIcon">
      <q-btn round dense flat :icon="field.beforeIcon" />
    </template>

    <template v-slot:append v-if="field.type === 'password'">
      <q-icon
        :name="visible ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="visible = !visible"
      />
    </template>
  </q-input>
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'Input',
  mixins: [
    formComponentMixin
  ],
  data () {
    return {
      visible: true
    }
  },
  methods: {
    getType () {
      if (this.field.type === 'password') {
        return this.visible ? 'password' : 'text'
      }

      return this.field.type
    }
  }
}
</script>

<style scoped>

</style>
