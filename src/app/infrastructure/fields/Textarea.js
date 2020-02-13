import Field from 'src/app/infrastructure/fields/Field'

export default class Textarea extends Field {
  createFields () {
    super.createFields()
    this.focus = () => ''
    this.blur = () => ''
  }

  setFieldType () {
    this.fieldType = 'Textarea'

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
