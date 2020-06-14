import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import Select from 'src/app/infrastructure/components/fields/Select'
import ButtonIcon from 'src/app/infrastructure/components/fields/ButtonIcon'

export default class GroupBuilder extends FormBuilder {
  createFields () {
    const groupTitle = new Input()
      .setLabel('Group name')
      .setModel('name')
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 5% 5% 0%; color: white')
      .setSquare(true)
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('This field can\'t be empty')

    const select = new Select()
      .setLabel('Color')
      .setModel('color')
      .setSquare(true)
      .setFilled(true)
      .setOptionValue('value')
      .setOptionLabel('label')
      .setHasCustomOptions(true)
      .setHasContent(true)
      .setHasLabel(true)
      .setHasAfterIcon(true)
      .setClass('col-xs-3')
      .setDarkMode(true)
      .setClass('col-xs-10 secondary-bg-color')
      .setStyle('margin: 3% 6% 4%')
      .setColor('white')
      .setErrorMessage('You should select an option!')

    const btnSave = new ButtonIcon()
      .setIcon('save')
      .setColor('teal-5')
      .setClass('col-xs-2 secondary-bg-color')
      .setStyle('margin: 25% 0% 0%;')
      .setRound(true)
      .setClick('saveData')

    this.addField(groupTitle)
    this.addField(select)
    this.addField(btnSave)
  }

  addOptions (options) {
    this.fields[1].setOptions(options)
  }
}
