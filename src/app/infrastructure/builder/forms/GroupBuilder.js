import FormBuilder from 'src/app/infrastructure/builder/pages/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'

export default class GroupBuilder extends FormBuilder {
  createFields () {
    const groupTitle = new Input()
      .setTitle('Group name')
      .setModel('name')
      .setDisable(false)
      .setColor('white')
      .setClass('col-xs-8 secondary-bg-color')
      .setStyle('margin: 5% 0% 5% 5%; color: white')
      .setSquare(true)
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage(`This field can't be empty`)

    const btnSave = new ButtonIcon()
      .setClass('col-xs-2 secondary-bg-color')
      .setColor('teal-5')
      .setClick('saveData')
      .setStyle('margin-top: 42%')
      .setRound(true)
      .setIcon('save')

    const btnCancel = new ButtonIcon()
      .setClass('col-xs-2 secondary-bg-color')
      .setColor('negative')
      .setClick('enableAddButton')
      .setStyle('margin-top: 42%')
      .setRound(true)
      .setIcon('cancel')

    this.addField(groupTitle)
    this.addField(btnSave)
    this.addField(btnCancel)
  }
}
