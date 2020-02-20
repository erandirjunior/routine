export default class FormBuilder {
  constructor () {
    this.fields = []

    this.createFields()
  }

  addField (field) {
    this.fields.push(field)
  }

  getFields () {
    return this.fields
  }

  createFields () {
    throw new Error('You should implementing this method')
  }
}
