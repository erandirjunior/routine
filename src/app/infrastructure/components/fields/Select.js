import FieldStyle from 'src/app/infrastructure/components/fields/FieldStyle'

export default class Select extends FieldStyle {
  constructor () {
    super()
    this.fieldType = 'Select'
    this.label = ''
    this.model = ''
    this.modelIsArray = false
    this.position = 0
    this.options = []
    this.optionValue = ''
    this.optionLabel = ''
    this.multiple = false
    this.hasCustomOptions = false
    this.behavior = 'menu'
    this.hasError = false
    this.errorMessage = ''

    return this
  }

  setLabel (label) {
    this.label = label

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

  getFields () {
    return this
  }

  setErrorMessage (errorMessage) {
    this.errorMessage = errorMessage

    return this
  }

  setOptions (options) {
    this.options = options

    return this
  }

  setOptionValue (optionValue) {
    this.optionValue = optionValue

    return this
  }

  setOptionLabel (optionLabel) {
    this.optionLabel = optionLabel

    return this
  }

  setMultiple (multiple) {
    this.multiple = multiple

    return this
  }

  setHasCustomOptions (hasCustomOptions) {
    this.hasCustomOptions = hasCustomOptions

    return this
  }

  setBehavior (behavior) {
    this.behavior = behavior

    return this
  }
}
