import Field from 'src/app/infrastructure/fields/Field'

export default class CheckBox extends Field {
  setFieldType () {
    this.fieldType = 'CheckBox'

    return this
  }
}
