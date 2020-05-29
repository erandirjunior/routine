import Field from 'src/app/infrastructure/fields/Field'

export default class Select extends Field {
  createFields () {
    super.createFields()
    this.readonly = () => false
    this.options = []
    this.optionValue = ''
    this.optionLabel = ''
    this.dense = false
  }

  setFieldType () {
    this.fieldType = 'Select'

    return this
  }

  setReadonly (readonly) {
    this.readonly = readonly

    return this
  }

  setOptions (options) {
    this.options = options

    return this
  }

  setOptionValue (optionValue) {
    this.optionValue = optionValue

    return this
  }

  setOptionLabel (optionLabel) {
    this.optionLabel = optionLabel

    return this
  }

  setDense (dense) {
    this.dense = dense

    return this
  }
}
