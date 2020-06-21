import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
// import CheckBox from 'src/app/infrastructure/components/fields/CheckBox'
// import ButtonDateIcon from 'src/app/infrastructure/components/fields/ButtonDateIcon'
import Radio from 'src/app/infrastructure/components/fields/Radio'
import RadioGroup from 'src/app/infrastructure/components/fields/RadioGroup'

export default class DateBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const standardMode = new Radio()
      .setModel('mode')
      .setLabel('Standard')
      .setClass('col-xs-6 secondary-bg-color')
      .setStyle('color: white; margin-left: 40%')
      .setVal('1')
      .setColor('teal-5')
      .setDarkMode(true)

    const customMode = new Radio()
      .setModel('mode')
      .setLabel('Custom')
      .setClass('col-xs-6 secondary-bg-color')
      .setStyle('color: white')
      .setVal('2')
      .setColor('teal-5')
      .setDarkMode(true)

    const date = new Input()
      .setLabel('Select the limit date')
      .setModel('finalDate')
      .setType('date')
      .setColor('white')
      .setClass('col-xs-12 secondary-bg-color')
      .setStyle('color: white; margin: 0% 24%')
      .setDarkMode(true)
      .setFilled(true)
      .setShow((field, form) => form.mode === '1')

    const week = new RadioGroup()
      .setOptions(this.getOptionList())
      .setModel('days')
      .setShow((field, form) => form.mode === '1')
      .setColor('teal-5')
      .setDarkMode(true)
      .setClass('col-xs-12 secondary-bg-color')
      .setType('checkbox')
      .setStyle('color: white; margin: 0% 0% 5%')
      .setInline(true)
      .setDense(true)
      .setSize('lg')

    this.addField(standardMode)
    this.addField(customMode)
    this.addField(date)
    this.addField(week)
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
