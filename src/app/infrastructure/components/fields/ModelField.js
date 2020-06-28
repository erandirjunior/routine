import Field from 'src/app/infrastructure/components/fields/Field'

export default class ModelField extends Field {
  model = ''
  modelIsArray = false
  modelPosition = 0
  errorMessage = ''
  fieldType = ''
  input = ''

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

  setModelPosition (position) {
    this.modelPosition = position

    return this
  }

  setErrorMessage (errorMessage) {
    this.errorMessage = errorMessage

    return this
  }

  setInput (methodName) {
    this.errorMessage = methodName

    return this
  }
}
