import Button from 'src/app/infrastructure/components/fields/Button'

export default class ButtonIcon extends Button {
  fieldType = 'ButtonIcon'
  icon = ''

  setIcon (icon) {
    this.icon = icon

    return this
  }
}
