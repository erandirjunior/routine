import Button from 'src/app/infrastructure/components/fields/Button'

export default class ButtonIcon extends Button {
  constructor () {
    super()
    this.fieldType = 'ButtonIcon'
    this.icon = ''
  }

  setIcon (icon) {
    this.icon = icon

    return this
  }
}
