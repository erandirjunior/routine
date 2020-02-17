import Field from 'src/app/infrastructure/fields/Field'

export default class Input extends Field {
  createFields () {
    super.createFields()
    this.focus = ''
    this.blur = ''
  }

  setFieldType () {
    this.fieldType = 'Input'

    return this
  }

  setFocus (callback) {
    this.focus = callback

    return this
  }

  setBlur (callback) {
    this.blur = callback

    return this
  }
}
