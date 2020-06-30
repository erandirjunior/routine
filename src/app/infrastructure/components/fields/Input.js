import AdvancedPropertyField from 'src/app/infrastructure/components/fields/AdvancedPropertyField'

export default class Input extends AdvancedPropertyField {
  fieldType = 'Input'
  dark = false
  type = 'input'
  autofocus = false
  hasPrepend = false
  hasAppend = false
  hasHint = false
  prependIcon = ''
  appendIcon = ''
  textHint = ''
  hasAfterIcon = false
  hasBeforeIcon = false
  afterIcon = ''
  beforeIcon = ''
  autogrow = false
  suffix = ''
  prefix = ''
  mask = ''
  blur = ''
  min = ''
  max = ''

  setDark (dark) {
    this.dark = dark

    return this
  }

  setType (type) {
    this.type = type

    return this
  }

  setAutofocus (autofocus) {
    this.autofocus = autofocus

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

  setMask (mask) {
    this.mask = mask

    return this
  }

  setBlur (methodName) {
    this.blur = methodName

    return this
  }

  setMin (min) {
    this.min = min

    return this
  }

  setMax (max) {
    this.max = max

    return this
  }
}
