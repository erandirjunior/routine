import FieldStyle from 'src/app/infrastructure/components/fields/FieldStyle'

export default class Button extends FieldStyle {
  constructor () {
    super()
    this.fieldType = 'Button'
    this.click = ''
    this.label = ''
    this.align = 'center'
    this.size = ''
    this.flat = false
    this.unelevated = false
    this.push = false
    this.pussy = false
    this.fab = false
    this.textColor = ''
    this.round = false
    this.noCaps = false
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

  setFlat (flat) {
    this.flat = flat

    return this
  }

  setUnelevated (unelevated) {
    this.unelevated = unelevated

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

  setNoCaps (noCaps) {
    this.noCaps = noCaps

    return this
  }
}
