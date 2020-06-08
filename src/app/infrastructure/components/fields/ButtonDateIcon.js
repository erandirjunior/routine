import ButtonIcon from 'src/app/infrastructure/components/fields/ButtonIcon'

export default class ButtonDateIcon extends ButtonIcon {
  constructor () {
    super()
    this.mask = 'YYYY-MM-DD'
    this.fieldType = 'ButtonDateIcon'
  }

  setMask (mask) {
    this.mask = mask

    return this
  }
}
