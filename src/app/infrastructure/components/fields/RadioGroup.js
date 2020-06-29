import Radio from 'src/app/infrastructure/components/fields/Radio'

export default class RadioGroup extends Radio {
  fieldType = 'RadioGroup'
  inline = false
  options = []
  type = 'radio'
  size = ''

  setOptions (options) {
    this.options = options

    return this
  }

  setInline (inline) {
    this.inline = inline

    return this
  }

  setType (type) {
    this.type = type

    return this
  }

  setSize (size) {
    this.size = size

    return this
  }
}
