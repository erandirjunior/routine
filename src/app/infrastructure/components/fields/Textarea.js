import Input from 'src/app/infrastructure/components/fields/Input'

export default class Textarea extends Input {
  setFieldType () {
    this.fieldType = 'Textarea'

    return this
  }
}
