import Field from 'src/app/infrastructure/fields/Field'

export default class Input extends Field {
  createFields () {
    super.createFields()
    this.focus = ''
    this.blur = ''
    this.dense = false
    this.filled = false
    this.outlined = false
    this.standout = false
    this.bordeless = false
    this.rounded = false
    this.square = false
    this.readonly = () => false
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

  setFilled (filled) {
    this.filled = filled

    return this
  }

  setOutlined (outlined) {
    this.outlined = outlined

    return this
  }

  setStandout (standout) {
    this.standout = standout

    return this
  }

  setBordeless (bordeless) {
    this.bordeless = bordeless

    return this
  }

  setRounded (rounded) {
    this.rounded = rounded

    return this
  }

  setSquare (square) {
    this.square = square

    return this
  }

  setReadonly (readonly) {
    this.readonly = readonly

    return this
  }

  setDense (dense) {
    this.dense = dense

    return this
  }
}
