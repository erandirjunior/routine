import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import ButtonIcon from 'src/app/infrastructure/components/fields/ButtonIcon'
import CheckBox from 'src/app/infrastructure/components/fields/CheckBox'
import Select from 'src/app/infrastructure/components/fields/Select'
import ButtonDateIcon from 'src/app/infrastructure/components/fields/ButtonDateIcon'

export default class TaskBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const title = new Input()
      .setLabel('Title')
      .setDense(true)
      .setModel('title')
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 0% 5% 0% 5%')
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('You should add at least one task!')

    const btnCheck = new CheckBox()
      .setModel('repeat')
      .setSize('xl')
      .setColor('teal-5')
      .setClass('col-xs-6 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 0% 0%')
      .setDarkMode(false)
      .setLabel('Repeat task until')
      .setDisable((field, form) => !!form.id)

    const finalDate = new ButtonDateIcon()
      .setModel('finalDate')
      .setIcon('event')
      .setClass('col-xs-1 secondary-bg-color')
      .setStyle('color: teal-5; margin: 20% 0% 0% 0%')
      .setColor('teal-5')
      .setRound(true)
      .setDisable((field, form) => !form.repeat || !!form.id)

    const titleDate = new Input()
      .setModel('finalDate')
      .setColor('white')
      .setClass('col-xs-5 secondary-bg-color')
      .setStyle('color: white; margin: 5% 12% 0% 14%')
      .setFilled(true)
      .setDarkMode(true)
      .setDisable(() => true)
      .setDense(true)

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
    this.addField(finalDate)
    this.addField(titleDate)
    this.addField(title)
    this.addField(select)
    this.addField(taskTitle)
    this.addField(addActivity)
  }

  addOptions (options) {
    this.fields[4].setOptions(options)
  }

  modifyIconButton (icon) {
    this.fields[6].setIcon(icon)
  }
}
