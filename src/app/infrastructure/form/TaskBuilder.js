import FormBuilder from 'src/app/infrastructure/form/FormBuilder'
import Input from 'src/app/infrastructure/fields/Input'
import Textarea from 'src/app/infrastructure/fields/Textarea'
import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'

export default class TaskBuilder extends FormBuilder {
  createFields () {
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

    this.addField(title)
    this.addField(description)
    this.addActivityLine(0)
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

  removeActivityLine (position) {
    this.fields = this.fields.filter((item, index) => {
      if ([0, 1].includes(index)) {
        return item
      }

      return item.position !== position
    })
  }
}
