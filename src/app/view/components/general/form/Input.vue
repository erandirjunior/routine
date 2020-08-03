<template>
  <q-input
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
    :readonly="field.readonly(form, field)"
    :prefix="field.prefix"
    :suffix="field.suffix"
    :autogrow="field.autogrow"
    :type="getType()"
    :mask="field.mask"
    :autofocus="field.autofocus"
    :min="field.min"
    :max="field.max"
    @input="input"
    @focus="focus"
    @clear="clear"
    @blur="blur"
  >
    <template v-slot:prepend v-if="field.hasPrepend">
      <q-icon :name="field.prependIcon" />
    </template>

    <template v-slot:append v-if="checkIfHasAppend()">
      <q-icon
        :name="getAppendIcon()"
        class="cursor-pointer"
        @click="enableVisibilityPassword()"
      />
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
  </q-input>
</template>

<script>
import formComponentMixin from 'src/app/view/mixins/formComponentMixin'

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
    checkIfTypeIsPassword () {
      return this.field.type === 'password'
    },
    enableVisibilityPassword () {
      if (this.checkIfTypeIsPassword()) {
        this.visible = !this.visible
      }
    },
    getAppendIcon () {
      if (this.checkIfTypeIsPassword()) {
        return this.visible ? 'visibility_off' : 'visibility'
      }

      return this.field.appendIcon
    },
    checkIfHasAppend () {
      return this.checkIfTypeIsPassword() || this.field.hasAppend
    },
    getType () {
      if (this.field.type === 'password') {
        return this.visible ? 'password' : 'text'
      }

      return this.field.type
    },
    input (value) {
      this.$emit('action', { action: this.field.input, value: value })
    },
    focus (value) {
      this.$emit('action', { action: this.field.focus, value: value })
    },
    clear (value) {
      this.$emit('action', { action: this.field.clear, value: value })
    },
    blur (value) {
      this.$emit('action', { action: this.field.blur, value: value })
    }
  }
}
</script>

<style scoped>

</style>
