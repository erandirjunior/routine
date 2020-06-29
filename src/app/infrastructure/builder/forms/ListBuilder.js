import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Icon from 'src/app/infrastructure/components/fields/Icon'

export default class ListBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const btnFinishedIcon = new Icon()
      .setIcon('done_all')
      .setColor('white')
      .setHide((form) => !form.finished)
      .setStyle('font-size: 27px')

    this.addField(btnFinishedIcon)
  }
}
