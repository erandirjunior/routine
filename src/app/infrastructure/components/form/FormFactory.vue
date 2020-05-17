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
        :validation="validation"
        @action="formAction"
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
import Select from './Select'
import DateTime from './DateTime'
import ButtonDateIcon from './ButtonDateIcon'

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
    },
    validation: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  components: {
    Input,
    Textarea,
    Button,
    CheckBox,
    ButtonIcon,
    Select,
    DateTime,
    ButtonDateIcon
  },
  methods: {
    formAction (action) {
      this.$emit('formAction', { action: action, value: this.form })
    }
  }
}
</script>

<style scoped>

</style>
