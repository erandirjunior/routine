import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import ButtonIcon from 'src/app/infrastructure/components/fields/ButtonIcon'
import CheckBox from 'src/app/infrastructure/components/fields/CheckBox'
import Select from 'src/app/infrastructure/components/fields/Select'

export default class TaskBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const btnCheck = new CheckBox()
      .setModel('repeat')
      .setSize('xl')
      .setColor('teal-5')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 0% 24%;')
      .setDarkMode(false)
      .setLabel('Setting Repetion')
      .setShow((field, form) => !form.id)

    const title = new Input()
      .setLabel('Title')
      .setDense(true)
      .setModel('title')
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 2% 5% 0% 5%')
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('You should add at least one task!')

    const select = new Select()
      .setLabel('Group')
      .setModel('groupId')
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

    const taskTitle = new Input()
      .setLabel('Task')
      .setModel('taskTitle')
      .setColor('white')
      .setClass('col-xs-9 secondary-bg-color')
      .setStyle('color: white; margin: 2% 0% 0% 7%')
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('You should add at least one task!')
      .setDense(true)
      .setAutogrow(true)

    const addActivity = new ButtonIcon()
      .setIcon('add')
      .setColor('teal-5')
      .setTextColor('white')
      .setAlign('center')
      .setClass('col-xs-3 secondary-bg-color')
      .setStyle('margin: 8% 0% 0% 15%; font-size: 15px;')
      .setClick('handleTaskItem')
      .setRound(false)
      .setSize('md')

    this.addField(btnCheck)
    this.addField(title)
    this.addField(select)
    this.addField(taskTitle)
    this.addField(addActivity)
  }

  addOptions (options) {
    this.fields[2].setOptions(options)
  }

  modifyIconButton (icon) {
    this.fields[4].setIcon(icon)
  }
}
