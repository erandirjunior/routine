import Field from 'src/app/infrastructure/components/fields/Field'

export default class DateTime extends Field {
  setFieldType () {
    this.fieldType = 'DateTime'
    this.size = 'xl'
    this.showDate = true
    this.showHour = true
    this.mask = ''
    this.readonly = () => false

    return this
  }

  setSize (size) {
    this.size = size

    return this
  }

  setShowDate (showDate) {
    this.showDate = showDate

    return this
  }

  setShowHour (showHour) {
    this.showHour = showHour

    return this
  }

  setMask (mask) {
    this.mask = mask

    return this
  }

  setReadonly (readonly) {
    this.readonly = readonly

    return this
  }
}
