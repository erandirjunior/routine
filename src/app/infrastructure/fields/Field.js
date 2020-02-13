export default class Field {
  constructor () {
    this.setFieldType()
    this.createFields()

    return this
  }

  createFields () {
    this.title = ''
    this.model = ''
    this.callback = () => ''
    this.hasError = false
    this.disable = false
    this.show = () => true
    this.input = () => ''
    this.class = ''
    this.inputClass = ''
    this.darkMode = false
    this.color = ''
  }

  setTitle (title) {
    this.title = title

    return this
  }

  setModel (model) {
    this.model = model

    return this
  }

  setCallback (callback) {
    this.callback = callback

    return this
  }

  setHasError (hasError) {
    this.hasError = hasError

    return this
  }

  setDisable (disable) {
    this.disable = disable

    return this
  }

  setDarkMode (mode) {
    this.darkMode = mode

    return this
  }

  setColor (color) {
    this.color = color

    return this
  }

  setShow (callback) {
    this.show = callback

    return this
  }

  setInput (callback) {
    this.input = callback

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

  getFields () {
    return this
  }

  setFieldType () {
    throw new Error('You should set field type')
  }
}
