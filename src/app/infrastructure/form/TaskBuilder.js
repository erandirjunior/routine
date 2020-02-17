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
      .setDarkMode(true)
      .setClass('col-xs-12')
      .setColor('white')

    const textarea = new Textarea()
      .setTitle('Descrição')
      .setModel('title')
      .setDisable(false)
      .setClass('col-xs-12')
      .setColor('white')
      .setDarkMode(true)

    this.addField(title)
    this.addField(textarea)
    this.addActivityLine(0)
  }

  addActivityLine (position) {
    const checkbox = new CheckBox()
      .setModel('check')
      .setModelIsArray(true)
      .setPosition(position)
      .setDisable(false)
      .setDarkMode(false)
      .setClass('col-xs-1')
      .setColor('red')

    const title2 = new Input()
      .setTitle('Atividade')
      .setModel('activity')
      .setModelIsArray(true)
      .setPosition(position)
      .setDisable(false)
      .setDarkMode(true)
      .setClass('col-xs-10')
      .setColor('white')

    const button = new Button()
      .setLabel('+')
      .setColor('red')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-xs-1')
      .setClick('add')

    this.addField(checkbox)
    this.addField(title2)
    this.addField(button)
  }
}
