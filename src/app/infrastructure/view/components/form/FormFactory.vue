<template>
  <div :class="classFactory">
    <div
      v-for="(field, index) in getFields()"
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
import Radio from './Radio'
import RadioGroup from './RadioGroup'

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
    },
    classFactory: {
      type: String,
      default: () => 'row'
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
    ButtonDateIcon,
    Radio,
    RadioGroup
  },
  methods: {
    formAction (action) {
      this.$emit('formAction', { action: action, value: this.form })
    },
    getFields () {
      return this.fields
        .getFields()
        .filter(field => {
          return field.show(field, this.form)
        })
    }
  }
}
</script>

<style scoped>

</style>
