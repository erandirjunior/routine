export default class Field {
  constructor () {
    this.model = ''
    this.modelIsArray = false
    this.position = 0
    this.errorMessage = ''
    this.hasError = false
    this.fieldType = ''
    this.show = () => true
    this.showInput = () => true

    return this
  }

  getFields () {
    return this
  }

  setModel (model) {
    this.model = model

    return this
  }

  setModelIsArray (value) {
    this.modelIsArray = value

    return this
  }

  setPosition (index) {
    this.position = index

    return this
  }

  setHasError (hasError) {
    this.hasError = hasError

    return this
  }

  setErrorMessage (errorMessage) {
    this.errorMessage = errorMessage

    return this
  }

  setShow (callback) {
    this.show = callback

    return this
  }

  setShowInput (callback) {
    this.showInput = callback

    return this
  }
}
