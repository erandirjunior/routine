import FieldStyle from 'src/app/infrastructure/components/fields/FieldStyle'

export default class Input extends FieldStyle {
  constructor () {
    super()
    this.fieldType = 'Input'
    this.label = ''
    this.model = ''
    this.type = 'input'
    this.modelIsArray = false
    this.position = 0
    this.hasPrepend = false
    this.hasAppend = false
    this.hasHint = false
    this.prependIcon = ''
    this.appendIcon = ''
    this.textHint = ''
    this.hasAfterIcon = false
    this.hasBeforeIcon = false
    this.afterIcon = ''
    this.beforeIcon = ''
    this.autogrow = false
    this.suffix = ''
    this.prefix = ''
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

  setType (type) {
    this.type = type

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

  setHasPrepend (hasPrepend) {
    this.hasPrepend = hasPrepend

    return this
  }

  setHasAppend (hasAppend) {
    this.hasAppend = hasAppend

    return this
  }

  setHasHint (hasHint) {
    this.hasHint = hasHint

    return this
  }

  setPrependIcon (prependIcon) {
    this.prependIcon = prependIcon

    return this
  }

  setAppendIcon (appendIcon) {
    this.appendIcon = appendIcon

    return this
  }

  setTextHint (textHint) {
    this.textHint = textHint

    return this
  }

  setHasAfterIcon (afterIcon) {
    this.hasAfterIcon = afterIcon

    return this
  }

  setHasBeforeIcon (beforeIcon) {
    this.hasBeforeIcon = beforeIcon

    return this
  }

  setAfterIcon (afterIcon) {
    this.afterIcon = afterIcon

    return this
  }

  setBeforeIcon (beforeIcon) {
    this.beforeIcon = beforeIcon

    return this
  }

  setAutogrow (autogrow) {
    this.autogrow = autogrow

    return this
  }

  setSuffix (suffix) {
    this.suffix = suffix

    return this
  }

  setPrefix (prefix) {
    this.prefix = prefix

    return this
  }

  setHasError (hasError) {
    this.hasError = hasError

    return this
  }

  setColor (color) {
    this.color = color

    return this
  }

  getFields () {
    return this
  }

  setErrorMessage (errorMessage) {
    this.errorMessage = errorMessage

    return this
  }
}
