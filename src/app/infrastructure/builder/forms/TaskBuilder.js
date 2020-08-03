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
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 0% 0% 0% 24%;')
      .setDark(false)
      .setLabel('Setting Repetion')
      .setHideColumn((form) => form.id)
      .setKeepColor(true)

    const title = new Input()
      .setLabel('Title')
      .setDense(true)
      .setModel('title')
      .setColor('white')
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 3% 5% 2% 5%')
      .setFilled(true)
      .setDark(true)
      .setErrorMessage('You should define a title!')

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
      .setDark(true)
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setStyle('margin: 0% 5% 0%')
      .setColor('white')
      .setErrorMessage('You should select an option!')
      .setDense(true)

    const taskTitle = new Input()
      .setLabel('Task')
      .setModel('taskTitle')
      .setColor('white')
      .setColumnStyle('col-xs-10 secondary-bg-color')
      .setStyle('color: white; margin: 2% 2% 0% 7%')
      .setFilled(true)
      .setDark(true)
      .setErrorMessage('You should add at least one task!')
      .setDense(true)
      .setAutogrow(true)

    const addActivity = new ButtonIcon()
      .setIcon('add')
      .setColor('teal-5')
      .setTextColor('white')
      .setAlign('center')
      .setColumnStyle('col-xs-2 secondary-bg-color')
      .setStyle('margin: 10% 0% 0% 4%; font-size: 14px;')
      .setClick('handlerTaskItem')
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
