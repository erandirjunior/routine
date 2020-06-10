import Field from 'src/app/infrastructure/components/fields/Field'

export default class FieldStyle extends Field {
  constructor () {
    super()
    this.filled = false
    this.outlined = false
    this.standout = false
    this.rounded = false
    this.square = false
    this.borderless = false
    this.dense = false
    this.darkMode = false
    this.clearable = false
    this.color = ''
    this.class = ''
    this.inputClass = ''
    this.style = ''
    this.disable = () => false
    this.readonly = () => false
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

  setRounded (rounded) {
    this.rounded = rounded

    return this
  }

  setSquare (square) {
    this.square = square

    return this
  }

  setBorderless (borderless) {
    this.borderless = borderless

    return this
  }

  setDense (dense) {
    this.dense = dense

    return this
  }

  setDarkMode (mode) {
    this.darkMode = mode

    return this
  }

  setClearable (clearable) {
    this.clearable = clearable

    return this
  }

  setColor (color) {
    this.color = color

    return this
  }

  setClass (classStyle) {
    this.class = classStyle

    return this
  }

  setInputClass (classStyle) {
    this.inputClass = classStyle

    return this
  }

  setStyle (style) {
    this.style = style

    return this
  }

  setDisable (disable) {
    this.disable = disable

    return this
  }

  setReadonly (readonly) {
    this.readonly = readonly

    return this
  }
}
