import FormBuilder from 'src/app/infrastructure/builder/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import Button from 'src/app/infrastructure/fields/Button'

export default class GroupBuilder extends FormBuilder {
  createFields () {
    const groupTitle = new Input()
      .setTitle('Group name')
      .setModel('name')
      .setDisable(false)
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 5% 5% 5% 5%; color: white')
      .setSquare(true)
      .setFilled(true)
      .setDarkMode(true)

    const btnSave = new Button()
      .setLabel('Save')
      .setClass('col-xs-12')
      .setColor('teal-5')
      .setInputClass('full-width')
      .setClick('saveData')

    this.addField(groupTitle)
    this.addField(btnSave)
  }
}
