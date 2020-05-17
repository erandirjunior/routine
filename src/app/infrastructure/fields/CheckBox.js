import Field from 'src/app/infrastructure/fields/Field'

export default class CheckBox extends Field {
  setFieldType () {
    this.fieldType = 'CheckBox'
    this.size = 'xl'

    return this
  }

  setSize (size) {
    this.size = size

    return this
  }
}
