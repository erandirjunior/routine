import Field from 'src/app/infrastructure/fields/Field'

export default class Icon extends Field {
  createFields () {
    super.createFields()
    this.size = ''
    this.icon = ''
  }

  setFieldType () {
    this.fieldType = 'Icon'

    return this
  }

  setIcon (icon) {
    this.icon = icon

    return this
  }

  setSize (size) {
    this.size = size

    return this
  }
}
