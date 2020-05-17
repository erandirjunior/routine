import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import DateTime from 'src/app/infrastructure/fields/DateTime'
import Input from 'src/app/infrastructure/fields/Input'
import CheckBox from 'src/app/infrastructure/fields/CheckBox'

export default class DateBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const dateTitle = new Input()
      .setTitle('Set the reminder date')
      .setDisable(true)
      .setColor('white')
      .setClass('col-xs-12')
      .setStyle('color: white;')
      .setDarkMode(true)
      .setBordeless(true)

    const startDate = new DateTime()
      .setTitle('Start Date')
      .setModel('startDate')
      .setDarkMode(true)
      .setColor('white')
      .setClass('col-xs-12')
      .setStyle('color: white;')

    const btnCheck = new CheckBox()
      .setModel('repeat')
      .setColor('teal-5')
      .setDisable()
      .setClass('col-xs-1 secondary-bg-color')
      .setStyle('margin: 0% 0% 0% -90%')
      .setDarkMode(false)
      .setTitle('Repeat')

    const showFinalFields = (fields, form) => form.repeat

    const dateFinalTitle = new Input()
      .setTitle('Set the limit repeat date')
      .setDisable(true)
      .setColor('white')
      .setClass('col-xs-12')
      .setStyle('color: white;')
      .setDarkMode(true)
      .setBordeless(true)
      .setShow(showFinalFields)

    const finalDate = new DateTime()
      .setTitle('Start Date')
      .setModel('startDate')
      .setDarkMode(true)
      .setColor('white')
      .setClass('col-xs-12')
      .setStyle('color: white;')
      .setShow(showFinalFields)

    this.addField(dateTitle)
    this.addField(startDate)
    this.addField(btnCheck)
    this.addField(dateFinalTitle)
    this.addField(finalDate)
  }
}
