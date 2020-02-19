<template>
  <div class="row q-col-gutter-sm">
    <div
      v-for="(field, index) in fields.getFields()"
      :key="index"
      :class="field.class"
    >
      <component
        :is="field.fieldType"
        :form="form"
        :field="field"
        @action="action"
      />
    </div>
  </div>
</template>

<script>
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import CheckBox from './CheckBox'
import ButtonIcon from './ButtonIcon'

export default {
  name: 'FormFactory',
  props: {
    fields: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  components: {
    Input,
    Textarea,
    Button,
    CheckBox,
    ButtonIcon
  },
  methods: {
    action (action) {
      this.$emit('action', { action: action, value: this.form })
    }
  }
}
</script>

<style scoped>

</style>
