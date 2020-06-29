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
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setStyle('margin: 5% 5% 0%; color: white')
      .setSquare(true)
      .setFilled(true)
      .setDark(true)
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
      .setDark(true)
      .setColumnStyle('col-xs-9 secondary-bg-color')
      .setStyle('margin: 0% 0% 4% 6%')
      .setColor('white')
      .setErrorMessage('You should select an option!')

    const btnSave = new ButtonIcon()
      .setIcon('save')
      .setColor('teal-5')
      .setTextColor('white')
      .setColumnStyle('col-xs-3 secondary-bg-color')
      .setStyle('margin-left: 9%; padding: 3px')
      .setSize('lg')
      .setClick('saveData')

    this.addField(groupTitle)
    this.addField(select)
    this.addField(btnSave)
  }

  addOptions (options) {
    this.fields[1].setOptions(options)
  }
}
