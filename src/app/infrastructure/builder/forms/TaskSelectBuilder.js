import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Select from 'src/app/infrastructure/components/fields/Select'

export default class TaskSelectBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const select = new Select()
      .setLabel('Group')
      .setModel('select')
      .setFilled(true)
      .setOptionValue('value')
      .setOptionLabel('label')
      .setHasCustomOptions(true)
      .setHasContent(true)
      .setHasLabel(true)
      .setHasAfterIcon(true)
      .setDarkMode(true)
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 0% 5% 0%')
      .setColor('white')
      .setErrorMessage('You should select an option!')
      .setDense(true)

    this.addField(select)
  }

  addOptions (options) {
    this.fields[0].setOptions(options)
  }
}
