import FormBuilder from 'src/app/infrastructure/form/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import Textarea from 'src/app/infrastructure/fields/Textarea'
import Button from 'src/app/infrastructure/fields/Button'
import CheckBox from 'src/app/infrastructure/fields/CheckBox'

export default class TaskBuilder extends FormBuilder {
  createFields () {
    const title = new Input()
      .setTitle('Título')
      .setModel('title')
      .setDisable(false)
      .setClass('col-xs-12')

    const description = new Textarea()
      .setTitle('Descrição')
      .setModel('title')
      .setDisable(false)
      .setClass('col-xs-12')

    const btnAddTask = new Button()
      .setLabel('+')
      .setColor('red')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-xs-1')
      .setClick('add')

    this.addField(title)
    this.addField(description)
    this.addActivityLine(0)
    this.addField(btnAddTask)
  }

  addActivityLine (position) {
    const checkTask = new CheckBox()
      .setModel('check')
      .setModelIsArray(true)
      .setPosition(position)
      .setDisable(false)
      .setDarkMode(false)
      .setClass('col-sm-1')
      .setColor('red')
      .setInputClass('white')
      .setStyle('margin-top: 65%')

    const taskTitle = new Input()
      .setTitle('Atividade')
      .setModel('activity')
      .setModelIsArray(true)
      .setPosition(position)
      .setDisable(false)
      .setClass('col-xs-8')

    const btnDeleteTask = new Button()
      .setLabel('-')
      .setColor('red')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-sm-1')
      .setClick('add')
      .setStyle('margin-top: 36%')

    this.addField(checkTask)
    this.addField(taskTitle)
    this.addField(btnDeleteTask)
  }
}
