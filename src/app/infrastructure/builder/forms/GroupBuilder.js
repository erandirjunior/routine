import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import Select from 'src/app/infrastructure/fields/Select'
import Button from 'src/app/infrastructure/fields/Button'

export default class GroupBuilder extends FormBuilder {
  createFields () {
    const groupTitle = new Input()
      .setTitle('Group name')
      .setModel('name')
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 5% 5% 0%; color: white')
      .setSquare(true)
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage(`This field can't be empty`)

    const select = new Select()
      .setTitle('Color')
      .setModel('color')
      .setDarkMode(true)
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 3% 5% 0%')
      .setColor('white')
      .setErrorMessage('You should select a option!')

    const btnSave = new Button()
      .setLabel('SALVAR')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 3% 5% 5%; padding: 0% 33%;')
      .setColor('teal-5')
      .setClick('saveData')

    this.addField(groupTitle)
    this.addField(select)
    this.addField(btnSave)
  }

  addOptions (options) {
    this.fields[1].setOptions(options)
  }
}
