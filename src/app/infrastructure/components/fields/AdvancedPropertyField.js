import ModelField from 'src/app/infrastructure/components/fields/ModelField'

export default class AdvancedPropertyField extends ModelField {
  label = ''
  filled = false
  rounded = false
  outlined = false
  borderless = false
  standout = false
  square = false
  dense = false
  dark = false
  clearable = false
  readonly = () => false
  clear = ''
  focus = ''

  setLabel (label) {
    this.label = label

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

  setBorderless (borderless) {
    this.borderless = borderless

    return this
  }

  setStandout (standout) {
    this.standout = standout

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

  setDense (dense) {
    this.dense = dense

    return this
  }

  setDark (dark) {
    this.dark = dark

    return this
  }

  setReadonly (callback) {
    this.readonly = callback

    return this
  }

  setClearable (clearable) {
    this.clearable = clearable

    return this
  }

  setClear (methodName) {
    this.clear = methodName

    return this
  }

  setFocus (methodName) {
    this.focus = methodName

    return this
  }
}
