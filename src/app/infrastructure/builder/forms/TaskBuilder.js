import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'
import CheckBox from 'src/app/infrastructure/fields/CheckBox'
import Select from 'src/app/infrastructure/fields/Select'
import ButtonDateIcon from 'src/app/infrastructure/fields/ButtonDateIcon'

export default class TaskBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const title = new Input()
      .setTitle('Title')
      .setModel('title')
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 0% 5% 0% 5%')
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('You should add at least one task!')

    const btnCheck = new CheckBox()
      .setModel('repeat')
      .setColor('teal-5')
      .setClass('col-xs-6 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 0% 0%')
      .setDarkMode(false)
      .setTitle('Repeat task until')
      .setDisable((field, form) => !!form.id)

    const finalDate = new ButtonDateIcon()
      .setModel('finalDate')
      .setIcon('event')
      .setClass('col-xs-1 secondary-bg-color')
      .setStyle('color: teal-5; margin: 20% 0% 0% 0%')
      .setColor('teal-5')
      .setRound(true)
      .setDisable((field, form) => !!form.id)

    const titleDate = new Input()
      .setModel('finalDate')
      .setColor('white')
      .setClass('col-xs-5 secondary-bg-color')
      .setStyle('color: white; margin: 5% 15% 0% 14%')
      .setFilled(true)
      .setDarkMode(true)
      .setDisable(() => true)
      .setDense(true)

    const select = new Select()
      .setTitle('Group')
      .setModel('groupId')
      .setOptionValue('value')
      .setOptionLabel('label')
      .setDarkMode(true)
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 0% 5% 0%')
      .setColor('white')
      .setErrorMessage('You should select a option!')

    const taskTitle = new Input()
      .setTitle('Task')
      .setModel('taskTitle')
      .setColor('white')
      .setClass('col-xs-9 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 0% 7%')
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('You should add at least one task!')

    const addActivity = new ButtonIcon()
      .setIcon('add')
      .setColor('teal-5')
      .setTextColor('white')
      .setAlign('center')
      .setClass('col-xs-3 secondary-bg-color')
      .setStyle('margin: 6% 0% 0% 0%; font-size: 18px;')
      .setClick('add')
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
}
