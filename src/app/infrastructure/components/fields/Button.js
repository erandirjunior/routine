import Field from 'src/app/infrastructure/components/fields/Field'

export default class Button extends Field {
  createFields () {
    super.createFields()
    this.click = ''
    this.label = ''
    this.align = 'center'
    this.size = ''
    this.outline = false
    this.flat = false
    this.unelevated = false
    this.rounded = false
    this.push = false
    this.pussy = false
    this.fab = false
    this.textColor = ''
    this.round = false
  }

  setFieldType () {
    this.fieldType = 'Button'

    return this
  }

  setClick (callback) {
    this.click = callback

    return this
  }

  setLabel (label) {
    this.label = label

    return this
  }

  setAlign (align) {
    this.align = align

    return this
  }

  setSize (size) {
    this.size = size

    return this
  }

  setOutline (outline) {
    this.outline = outline

    return this
  }

  setFlat (flat) {
    this.flat = flat

    return this
  }

  setUnelevated (unelevated) {
    this.unelevated = unelevated

    return this
  }

  setRounded (rounded) {
    this.rounded = rounded

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

  setFab (fab) {
    this.fab = fab

    return this
  }

  setTextColor (textColor) {
    this.textColor = textColor

    return this
  }

  setRound (round) {
    this.round = round

    return this
  }
}
