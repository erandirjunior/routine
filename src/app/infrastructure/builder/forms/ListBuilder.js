import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import ButtonIcon from 'src/app/infrastructure/fields/ButtonIcon'
import Icon from 'src/app/infrastructure/fields/Icon'

export default class ListButtonBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const btnFinishedIcon = new Icon()
      .setIcon('done_all')
      .setColor('white')
      .setShow((field, form) => form.finished)
      .setStyle('font-size: 27px')

    const btnFinish = new ButtonIcon()
      .setIcon('done')
      .setColor('teal-5')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('col-xs-2 secondary-bg-color')
      .setClick('finishTask')
      .setStyle('margin: 1% 10%;')
      .setSize('sm')

    const btnEdit = new ButtonIcon()
      .setIcon('edit')
      .setColor('warning')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('secondary-bg-color')
      .setClick('editTask')
      .setStyle('margin: 1% 10%;')
      .setSize('sm')

    const btnDeleteTask = new ButtonIcon()
      .setIcon('delete')
      .setColor('red')
      .setTextColor('white')
      .setAlign('center')
      .setRound(true)
      .setClass('secondary-bg-color')
      .setClick('remove')
      .setStyle('margin: 1% 10%;')
      .setSize('sm')

    this.addField(btnFinishedIcon)
    this.addField(btnFinish)
    this.addField(btnEdit)
    this.addField(btnDeleteTask)
  }
}
