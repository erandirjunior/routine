import Field from 'src/app/infrastructure/components/fields/Field'

export default class Button extends Field {
  fieldType = 'Button'
  flat = false
  outline = false
  push = false
  pussy = false
  unelevated = false
  fab = false
  round = false
  rounded = false
  noCaps = false
  textColor = ''
  label = ''
  align = 'center'
  size = ''
  noWrap = false
  type = 'button'
  to = ''
  ripple = false
  padding = 'sm'
  click = ''

  setClick (callback) {
    this.click = callback

    return this
  }

  setFlat (flat) {
    this.flat = flat

    return this
  }

  setOutline (outline) {
    this.outline = outline

    return this
  }

  setPush (push) {
    this.push = push

    return this
  }

  setPussy (pussy) {
    this.pussy = pussy

    return this
  }

  setUnelevated (unelevated) {
    this.unelevated = unelevated

    return this
  }

  setFab (fab) {
    this.fab = fab

    return this
  }

  setRound (round) {
    this.round = round

    return this
  }

  setRounded (rounded) {
    this.rounded = rounded

    return this
  }

  setNoCaps (noCaps) {
    this.noCaps = noCaps

    return this
  }

  setTextColor (textColor) {
    this.textColor = textColor

    return this
  }

  setLabel (label) {
    this.label = label

    return this
  }

  setSize (size) {
    this.size = size

    return this
  }

  setAlign (align) {
    this.align = align

    return this
  }

  setNoWrap (noWrap) {
    this.noWrap = noWrap

    return this
  }

  setType (type) {
    this.type = type

    return this
  }

  setTo (to) {
    this.to = to

    return this
  }

  setRipple (object) {
    this.ripple = object

    return this
  }

  setPadding (padding) {
    this.padding = padding

    return this
  }
}
