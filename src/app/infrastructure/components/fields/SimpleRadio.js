import Radio from 'src/app/infrastructure/components/fields/Radio'

export default class SimpleRadio extends Radio {
  fieldType = 'SimpleRadio'
  val = ''
  label = ''

  setVal (val) {
    this.val = val

    return this
  }

  setLabel (label) {
    this.label = label

    return this
  }
}
