import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Select from 'src/app/infrastructure/components/fields/Select'

export default class TaskSelectBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const select = new Select()
      .setLabel('Group')
      .setModel('groupId')
      .setSquare(true)
      .setFilled(true)
      .setOptionValue('value')
      .setOptionLabel('label')
      .setHasCustomOptions(true)
      .setHasContent(true)
      .setHasLabel(true)
      .setHasAfterIcon(true)
      .setDark(true)
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setStyle('margin: 5% 5% 0% 5%')
      .setColor('white')
      .setErrorMessage('You should select an option!')
      .setInput('loadTasks')

    this.addField(select)
  }

  addOptions (options) {
    this.fields[0].setOptions(options)
  }
}
