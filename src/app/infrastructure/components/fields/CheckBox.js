import ModelField from 'src/app/infrastructure/components/fields/ModelField'

export default class CheckBox extends ModelField {
  fieldType = 'CheckBox'
  size = ''
  keepColor = false
  label = ''
  dark = false
  dense = false

  setSize (size) {
    this.size = size

    return this
  }

  setKeepColor (keepColor) {
    this.keepColor = keepColor

    return this
  }

  setLabel (label) {
    this.label = label

    return this
  }

  setDisable (disable) {
    this.disable = disable

    return this
  }

  setDark (dark) {
    this.dark = dark

    return this
  }

  setDense (dense) {
    this.dense = dense

    return this
  }
}
