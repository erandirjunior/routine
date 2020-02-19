import Button from 'src/app/infrastructure/fields/Button'

export default class ButtonIcon extends Button {
  createFields () {
    super.createFields()
    this.icon = ''
  }

  setFieldType () {
    this.fieldType = 'ButtonIcon'

    return this
  }

  setIcon (icon) {
    this.icon = icon

    return this
  }
}
