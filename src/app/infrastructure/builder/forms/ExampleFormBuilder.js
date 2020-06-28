import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import Select from 'src/app/infrastructure/components/fields/Select'
import CheckBox from 'src/app/infrastructure/components/fields/CheckBox'
import SimpleRadio from 'src/app/infrastructure/components/fields/SimpleRadio'
import RadioGroup from 'src/app/infrastructure/components/fields/RadioGroup'
import Button from 'src/app/infrastructure/components/fields/Button'
import ButtonIcon from 'src/app/infrastructure/components/fields/ButtonIcon'
import Icon from 'src/app/infrastructure/components/fields/Icon'

export default class ExampleFormBuilder extends FormBuilder {
  createFields () {
    this.insertFirstFields()
  }

  insertFirstFields () {
    const simpleList = [
      'Google',
      'Facebook',
      'Microsoft',
      'IBM'
    ]

    const objectList = [
      {
        label: 'Google',
        value: 1,
        description: 'Search engine',
        beforeIcon: 'mail',
        beforeIconColor: 'teal',
        afterIcon: 'mail',
        afterIconColor: 'red'
      },
      {
        label: 'Facebook',
        value: 2,
        description: 'Social media',
        beforeIcon: 'bluetooth',
        beforeIconColor: 'blue-10',
        afterIcon: 'bluetooth',
        afterIconColor: 'yellow'
      },
      {
        label: 'Twitter',
        value: 3,
        description: 'Quick updates',
        beforeIcon: 'map',
        beforeIconColor: 'blue-5',
        afterIcon: 'map',
        afterIconColor: 'green'
      },
      {
        label: 'Apple',
        value: 4,
        description: 'iStuff',
        beforeIcon: 'golf_course',
        beforeIconColor: 'black',
        afterIcon: 'golf_course',
        afterIconColor: 'grey',
        icon: 'golf_course'
      }
    ]

    const inputs = [
      ...this.createInputs(),
      ...this.createSelects(simpleList, objectList),
      ...this.createCheckbox(),
      ...this.createRadios(objectList),
      ...this.createButtons(),
      new Icon()
        .setColor('teal-5')
        .setSize('lg')
        .setIcon('done_all')
    ]

    inputs.forEach(input => {
      this.addField(input)
    })
  }

  createInputs () {
    return [
      new Input()
        .setLabel('Standard')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setFilled(true)
        .setAutofocus(true),
      new Input()
        .setLabel('Standard')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setFilled(true),
      new Input()
        .setLabel('Filled')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true),
      new Input()
        .setLabel('Outlined')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setStandout(true),
      new Input()
        .setLabel('Standout')
        .setModel('text')
        .setColumnStyle('col-xs-3'),
      new Input()
        .setLabel('Custom Standout')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setStandout('bg-teal text-white'),
      new Input()
        .setLabel('Borderless')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setBorderless(true),
      new Input()
        .setLabel('Rounded Filled')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setRounded(true)
        .setFilled(true),
      new Input()
        .setLabel('Rounded Outlined')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setRounded(true)
        .setOutlined(true),
      new Input()
        .setLabel('Rounded Standout')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setRounded(true)
        .setStandout(true),
      new Input()
        .setLabel('Square Filled')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setSquare(true)
        .setFilled(true),
      new Input()
        .setLabel('Square Outlined')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setSquare(true)
        .setOutlined(true),
      new Input()
        .setLabel('Square standout')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setSquare(true)
        .setStandout(true),
      new Input()
        .setLabel('Prepend')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setFilled(true)
        .setHasPrepend(true)
        .setPrependIcon('place'),
      new Input()
        .setLabel('Append')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setHasAppend(true)
        .setAppendIcon('favorite'),
      new Input()
        .setLabel('Prepend Append and Hint')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setStandout(true)
        .setHasPrepend(true)
        .setPrependIcon('place')
        .setHasAppend(true)
        .setAppendIcon('favorite')
        .setHasHint(true)
        .setTextHint('Field Hint'),
      new Input()
        .setLabel('Dense Input')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setStandout(true)
        .setHasPrepend(true)
        .setAppendIcon('place')
        .setHasAppend(true)
        .setAppendIcon('favorite')
        .setHasHint(true)
        .setTextHint('Field Hint')
        .setDense(true),
      new Input()
        .setLabel('After Icon')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setStandout(true)
        .setHasAfterIcon(true)
        .setAfterIcon('send'),
      new Input()
        .setLabel('Before Icon')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setStandout(true)
        .setHasPrepend(true)
        .setAppendIcon('place')
        .setHasBeforeIcon(true)
        .setBeforeIcon('event'),
      new Input()
        .setLabel('Disable')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setDisable(() => true),
      new Input()
        .setLabel('Readonly')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setReadonly(() => true),
      new Input()
        .setLabel('Disable and Readonly')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setDisable(() => true)
        .setReadonly(() => true),
      new Input()
        .setLabel('Dark')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setDisable(() => true)
        .setReadonly(() => true)
        .setDark(true)
        .setColumnStyle('bg-black'),
      new Input()
        .setLabel('Filled')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setClearable(true),
      new Input()
        .setLabel('Password')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setType('password'),
      new Input()
        .setLabel('Date')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setType('date'),
      new Input()
        .setLabel('Time')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setType('time'),
      new Input()
        .setLabel('File')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setType('file'),
      new Input()
        .setLabel('Autogrow')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setAutogrow(true),
      new Input()
        .setLabel('Preffix and Suffix')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setPrefix('E-mail:')
        .setSuffix('@email.com'),
      new Input()
        .setLabel('Show if has value')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setHideColumn((form) => !form.text),
      new Input()
        .setLabel('Show if has value')
        .setModel('text')
        .setColumnStyle('col-xs-3')
        .setOutlined(true)
        .setHide((form) => !form.text)
    ]
  }

  createSelects (simpleList, objectList) {
    return [
      new Select()
        .setLabel('Standard')
        .setModel('select')
        .setOptions(simpleList)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Filled')
        .setModel('select')
        .setOptions(simpleList)
        .setFilled(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Outlined')
        .setModel('select')
        .setOptions(simpleList)
        .setOutlined(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Standout')
        .setModel('select')
        .setOptions(simpleList)
        .setStandout(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Custom Standout')
        .setModel('select')
        .setOptions(simpleList)
        .setColumnStyle('col-xs-3')
        .setStandout('bg-teal text-white'),
      new Select()
        .setLabel('Bordeless')
        .setModel('select')
        .setOptions(simpleList)
        .setColumnStyle('col-xs-3')
        .setBorderless(true),
      new Select()
        .setLabel('Rounded')
        .setModel('select')
        .setOptions(simpleList)
        .setRounded(true)
        .setStandout(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Square')
        .setModel('select')
        .setOptions(simpleList)
        .setSquare(true)
        .setOutlined(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Clearable')
        .setModel('select')
        .setOptions(simpleList)
        .setSquare(true)
        .setClearable(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Multiple')
        .setModel('multSelect')
        .setOptions(simpleList)
        .setSquare(true)
        .setMultiple(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Object')
        .setModel('select')
        .setOptions(objectList)
        .setSquare(true)
        .setOptionLabel('label')
        .setOptionValue('value')
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Custom Options')
        .setModel('select')
        .setOptions(objectList)
        .setSquare(true)
        .setHasCustomOptions(true)
        .setHasBeforeIcon(true)
        .setHasContent(true)
        .setHasLabel(true)
        .setHasCaption(true)
        .setHasAfterIcon(true)
        .setColumnStyle('col-xs-3'),
      new Select()
        .setLabel('Behavior')
        .setModel('select')
        .setOptions(simpleList)
        .setBehavior('dialog')
        .setColumnStyle('col-xs-3')
    ]
  }

  createCheckbox () {
    return [
      new CheckBox()
        .setModel('check')
        .setSize('xl')
        .setLabel('Checkbox'),
      new CheckBox()
        .setModel('check')
        .setSize('xl')
        .setLabel('Color')
        .setColor('teal-5')
    ]
  }

  createRadios (objectList) {
    return [
      new SimpleRadio()
        .setModel('radio')
        .setVal(1)
        .setLabel('Right Label'),
      new SimpleRadio()
        .setModel('radio')
        .setVal(2)
        .setLabel('Left Label')
        .setLeftLabel(true),
      new RadioGroup()
        .setOptions(objectList)
        .setModel('radioGroup')
        .setLeftLabel(true),
      new RadioGroup()
        .setOptions(objectList)
        .setModel('radioGroup')
        .setInline(true)
        .setDense(true),
      new RadioGroup()
        .setOptions(objectList)
        .setModel('radioToggle')
        .setType('toggle')
        .setDense(true)
    ]
  }

  createButtons () {
    return [
      new Button()
        .setLabel('Button')
        .setColor('teal-5')
        .setRipple({ color: 'red' })
        .setPadding('xs'),
      new Button()
        .setLabel('Without Ripple')
        .setColor('teal-5')
        .setRounded(true)
        .setPadding('lg'),
      new Button()
        .setLabel('Disabled')
        .setColor('teal-5')
        .setDisable(() => true)
        .setPadding('xs'),
      new ButtonIcon()
        .setLabel('Add')
        .setIcon('add')
        .setColor('blue')
        .setTextColor('yellow'),
      new ButtonIcon()
        .setIcon('person')
        .setRound(true)
        .setColor('positive')
    ]
  }
}
