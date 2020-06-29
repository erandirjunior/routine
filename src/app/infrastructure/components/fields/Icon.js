import Field from 'src/app/infrastructure/components/fields/Field'

export default class Icon extends Field {
  fieldType = 'Icon'
  icon = ''
  size = 'md'

  setSize (size) {
    this.size = size

    return this
  }

  setIcon (icon) {
    this.icon = icon

    return this
  }
}
