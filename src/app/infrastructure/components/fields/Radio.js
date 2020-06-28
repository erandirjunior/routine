import ModelField from 'src/app/infrastructure/components/fields/ModelField'

export default class Radio extends ModelField {
  size = ''
  keepColor = false
  leftLabel = false

  setSize (size) {
    this.size = size

    return this
  }

  setKeepColor (keepColor) {
    this.keepColor = keepColor

    return this
  }

  setLeftLabel (leftLabel) {
    this.leftLabel = leftLabel

    return this
  }
}
