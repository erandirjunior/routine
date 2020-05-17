import FormBuilder from 'src/app/infrastructure/builder/pages/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'
import CheckBox from 'src/app/infrastructure/fields/CheckBox'
import Select from 'src/app/infrastructure/fields/Select'
import DateTime from 'src/app/infrastructure/fields/DateTime'

export default class TaskBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const title = new Input()
      .setTitle('Title')
      .setModel('title')
      .setDisable(false)
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

    const finalDate = new DateTime()
      .setTitle('Final Date')
      .setModel('finalDate')
      .setDarkMode(true)
      .setColor('white')
      .setClass('col-xs-6 secondary-bg-color')
      .setStyle('color: white; margin: 0% 10% 5%')
      .setDisable((fields, form) => !form.repeat)
      .setShowHour(false)
      .setMask('YYYY-MM-DD')

    const select = new Select()
      .setTitle('Group')
      .setModel('groupId')
      .setOptionValue('value')
      .setOptionLabel('label')
      .setDarkMode(true)
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('margin: 0% 5% 5%')
      .setColor('white')
      .setErrorMessage('You should select a option!')

    const taskTitle = new Input()
      .setTitle('Task')
      .setModel('taskTitle')
      .setDisable(false)
      .setColor('white')
      .setClass('col-xs-9 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 5% 7%')
      .setFilled(true)
      .setDarkMode(true)
      .setErrorMessage('You should add at least one task!')

    const addActivity = new ButtonIcon()
      .setIcon('add')
      .setColor('teal-5')
      .setTextColor('white')
      .setAlign('center')
      .setClass('col-xs-3 secondary-bg-color')
      .setStyle('margin: 6% 0%; font-size: 18px;')
      .setClick('add')
      .setRound(false)
      .setSize('md')

    this.addField(btnCheck)
    this.addField(finalDate)
    this.addField(title)
    this.addField(select)
    this.addField(taskTitle)
    this.addField(addActivity)
  }

  addOptions (options) {
    this.fields[3].setOptions(options)
  }

  addActivityLine (position, enableCheckbox = true) {
    const taskTitle = new Input()
      .setModel('tasks')
      .setModelIsArray(true)
      .setPosition(position)
      .setDisable(false)
      .setReadonly(true)
      .setClass('col-xs-9 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 5% 7%')
      .setSquare(true)
      .setOutlined(true)
      .setDarkMode(true)

    const btnDeleteTask = new ButtonIcon()
      .setIcon('delete')
      .setColor('red')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-xs-3 secondary-bg-color')
      .setClick('remove')
      .setStyle('margin: 8% 10%; font-size: 15px')
      .setPosition(position)
      .setSize('xl')

    this.addField(taskTitle)
    this.addField(btnDeleteTask)
  }

  resetFields () {
    this.fields = []
    this.insertFirstFields()
  }
}
