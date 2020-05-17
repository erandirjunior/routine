import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'

export default class ButtonDateIcon extends ButtonIcon {
  createFields () {
    super.createFields()
    this.mask = 'YYYY-MM-DD'
  }

  setFieldType () {
    this.fieldType = 'ButtonDateIcon'

    return this
  }

  setMask (mask) {
    this.mask = mask

    return this
  }
}
