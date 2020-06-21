import Radio from 'src/app/infrastructure/components/fields/Radio'

export default class RadioGroup extends Radio {
  constructor () {
    super()
    this.fieldType = 'RadioGroup'
    this.inline = false
    this.options = []
  }

  setOptions (options) {
    this.options = options

    return this
  }

  setInline (inline) {
    this.inline = inline

    return this
  }
}
