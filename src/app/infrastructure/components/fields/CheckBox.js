import ModelField from 'src/app/infrastructure/components/fields/ModelField'

export default class CheckBox extends ModelField {
  fieldType = 'CheckBox'
  size = ''
  keepColor = false
  label = ''

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
}
