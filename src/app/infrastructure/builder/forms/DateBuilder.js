import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
// import CheckBox from 'src/app/infrastructure/components/fields/CheckBox'
// import ButtonDateIcon from 'src/app/infrastructure/components/fields/ButtonDateIcon'
import SimpleRadio from 'src/app/infrastructure/components/fields/SimpleRadio'
import RadioGroup from 'src/app/infrastructure/components/fields/RadioGroup'

export default class DateBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const standardMode = new SimpleRadio()
      .setModel('mode')
      .setLabel('Standard')
      .setColumnStyle('col-xs-6 secondary-bg-color')
      .setStyle('color: white; margin-left: 40%')
      .setVal('1')
      .setColor('teal-5')
      .setDark(true)

    const customMode = new SimpleRadio()
      .setModel('mode')
      .setLabel('Custom')
      .setColumnStyle('col-xs-6 secondary-bg-color')
      .setStyle('color: white')
      .setVal('2')
      .setColor('teal-5')
      .setDark(true)

    const date = new Input()
      .setLabel('Select the limit date')
      .setModel('date')
      .setType('date')
      .setColor('white')
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 0% 24%')
      .setDark(true)
      .setFilled(true)
      .setHide((form) => form.mode !== '1')

    const days = new RadioGroup()
      .setOptions(this.getOptionList())
      .setModel('days')
      .setHideColumn((form) => form.mode !== '1')
      .setColor('teal-5')
      .setDark(true)
      .setColumnStyle('col-xs-12 secondary-bg-color')
      .setType('checkbox')
      .setStyle('color: white; margin: 0% 0% 5%')
      .setInline(true)
      .setDense(true)
      .setSize('lg')

    this.addField(standardMode)
    this.addField(customMode)
    this.addField(date)
    this.addField(days)
  }

  getOptionList () {
    return [
      {
        label: 'S',
        value: 0
      },
      {
        label: 'M',
        value: 1
      },
      {
        label: 'T',
        value: 2
      },
      {
        label: 'W',
        value: 3
      },
      {
        label: 'T',
        value: 4
      },
      {
        label: 'F',
        value: 5
      },
      {
        label: 'S',
        value: 6
      }
    ]
  }
}
