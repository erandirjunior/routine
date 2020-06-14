import Field from 'src/app/infrastructure/components/fields/Field'

export default class CheckBox extends Field {
  constructor () {
    super()
    this.fieldType = 'CheckBox'
    this.size = ''
    this.label = ''
    this.color = ''
    this.class = ''
    this.inputClass = ''
    this.style = ''
    this.darkMode = false
    this.disable = () => false
  }

  setSize (size) {
    this.size = size

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

  setInputClass (inputClass) {
    this.inputClass = inputClass

    return this
  }

  setStyle (style) {
    this.style = style

    return this
  }

  setDarkMode (darkMode) {
    this.darkMode = darkMode

    return this
  }

  setLabel (label) {
    this.label = label

    return this
  }

  setDisable (disable) {
    this.disable = disable

    return this
  }
}
