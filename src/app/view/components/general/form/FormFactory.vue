<template>
  <div :class="classFactory">
    <div
      v-for="(field, index) in getFields()"
      :key="index"
      :class="field.columnStyle"
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
import Button from './Button'
import CheckBox from './CheckBox'
import ButtonIcon from './ButtonIcon'
import Select from './Select'
import SimpleRadio from './Radio'
import RadioGroup from './RadioGroup'
import Icon from '../icon/Icon'

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
    Button,
    CheckBox,
    ButtonIcon,
    Select,
    SimpleRadio,
    RadioGroup,
    Icon
  },
  methods: {
    formAction (action) {
      this.$emit('formAction', { action: action, value: this.form })
    },
    getFields () {
      return this.fields
        .getFields()
        .filter(field => {
          return !field.hideColumn(this.form, field)
        })
    }
  }
}
</script>

<style scoped>

</style>
