import FormBuilder from 'src/app/infrastructure/builder/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import Textarea from 'src/app/infrastructure/fields/Textarea'
import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'

export default class TaskBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const title = new Input()
      .setTitle('Título da Atividade')
      .setModel('title')
      .setDisable(false)
      .setClass('col-xs-12')

    const description = new Textarea()
      .setTitle('Descrição')
      .setModel('title')
      .setDisable(false)
      .setClass('col-xs-12')

    const activityTitle = new Input()
      .setTitle('Tarefa')
      .setModel('activityTitle')
      .setDisable(false)
      .setClass('col-xs-10')
      .setOutlined(true)
      .setStyle('margin: 3% 4% 8% 3%')

    const addActivity = new ButtonIcon()
      .setIcon('add')
      .setColor('grey-5')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-sm-1')
      .setClick('add')
      .setStyle('margin-top: 20%; padding: 10%; margin-left: -25% !important;')
      .setSize('lg')

    this.addField(title)
    this.addField(description)
    this.addField(activityTitle)
    this.addField(addActivity)
  }

  addActivityLine (position) {
    const taskTitle = new Input()
      .setTitle('Nome da Tarefa')
      .setModel('activity')
      .setModelIsArray(true)
      .setPosition(position)
      .setDisable(false)
      .setClass('col-xs-8')

    const btnDeleteTask = new ButtonIcon()
      .setIcon('delete')
      .setColor('red')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-sm-1')
      .setClick('remove')
      .setStyle('margin-top: 36%')
      .setPosition(position)

    this.addField(taskTitle)
    this.addField(btnDeleteTask)
  }

  resetFields () {
    this.fields = []
    this.insertFirstFields()
  }
}
