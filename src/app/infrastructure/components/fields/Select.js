import AdvancedPropertyField from 'src/app/infrastructure/components/fields/AdvancedPropertyField'

export default class Select extends AdvancedPropertyField {
  fieldType = 'Select'
  multiple = false
  options = []
  optionValue = ''
  optionLabel = ''
  emitValue = true
  mapOptions = true
  behavior = 'menu'
  hasCustomOptions = false
  hasBeforeIcon = false
  hasAfterIcon = false
  hasContent = false
  hasLabel = false
  hasCaption = false
  labelColor = ''

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

  setHasBeforeIcon (hasBeforeIcon) {
    this.hasBeforeIcon = hasBeforeIcon

    return this
  }

  setHasAfterIcon (hasAfterIcon) {
    this.hasAfterIcon = hasAfterIcon

    return this
  }

  setHasContent (hasContent) {
    this.hasContent = hasContent

    return this
  }

  setHasLabel (hasLabel) {
    this.hasLabel = hasLabel

    return this
  }

  setHasCaption (hasCaption) {
    this.hasCaption = hasCaption

    return this
  }

  setEmitValue (emitValue) {
    this.emitValue = emitValue

    return this
  }

  setMapOptions (mapOptions) {
    this.mapOptions = mapOptions

    return this
  }

  setLabelColor (labelColor) {
    this.labelColor = labelColor

    return this
  }
}
