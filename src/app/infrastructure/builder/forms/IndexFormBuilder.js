import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import Select from 'src/app/infrastructure/components/fields/Select'
import CheckBox from 'src/app/infrastructure/components/fields/CheckBox'
import Radio from 'src/app/infrastructure/components/fields/Radio'
import Button from 'src/app/infrastructure/components/fields/Button'
import ButtonIcon from 'src/app/infrastructure/components/fields/ButtonIcon'
import ButtonDateIcon from 'src/app/infrastructure/components/fields/ButtonDateIcon'

export default class IndexFormBuilder extends FormBuilder {
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
      new Input()
        .setLabel('Standard')
        .setModel('text')
        .setClass('col-xs-3')
        .setFilled(true),
      new Input()
        .setLabel('Filled')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true),
      new Input()
        .setLabel('Outlined')
        .setModel('text')
        .setClass('col-xs-3')
        .setStandout(true),
      new Input()
        .setLabel('Standout')
        .setModel('text')
        .setClass('col-xs-3'),
      new Input()
        .setLabel('Custom Standout')
        .setModel('text')
        .setClass('col-xs-3')
        .setStandout('bg-teal text-white'),
      new Input()
        .setLabel('Borderless')
        .setModel('text')
        .setClass('col-xs-3')
        .setBorderless(true),
      new Input()
        .setLabel('Rounded Filled')
        .setModel('text')
        .setClass('col-xs-3')
        .setRounded(true)
        .setFilled(true),
      new Input()
        .setLabel('Rounded Outlined')
        .setModel('text')
        .setClass('col-xs-3')
        .setRounded(true)
        .setOutlined(true),
      new Input()
        .setLabel('Rounded Standout')
        .setModel('text')
        .setClass('col-xs-3')
        .setRounded(true)
        .setStandout(true),
      new Input()
        .setLabel('Square Filled')
        .setModel('text')
        .setClass('col-xs-3')
        .setSquare(true)
        .setFilled(true),
      new Input()
        .setLabel('Square Outlined')
        .setModel('text')
        .setClass('col-xs-3')
        .setSquare(true)
        .setOutlined(true),
      new Input()
        .setLabel('Square standout')
        .setModel('text')
        .setClass('col-xs-3')
        .setSquare(true)
        .setStandout(true),
      new Input()
        .setLabel('Prepend')
        .setModel('text')
        .setClass('col-xs-3')
        .setFilled(true)
        .setHasPrepend(true)
        .setPrependIcon('place'),
      new Input()
        .setLabel('Append')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setHasAppend(true)
        .setAppendIcon('favorite'),
      new Input()
        .setLabel('Prepend Append and Hint')
        .setModel('text')
        .setClass('col-xs-3')
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
        .setClass('col-xs-3')
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
        .setClass('col-xs-3')
        .setStandout(true)
        .setHasAfterIcon(true)
        .setAfterIcon('send'),
      new Input()
        .setLabel('Before Icon')
        .setModel('text')
        .setClass('col-xs-3')
        .setStandout(true)
        .setHasPrepend(true)
        .setAppendIcon('place')
        .setHasBeforeIcon(true)
        .setBeforeIcon('event'),
      new Input()
        .setLabel('Disable')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setDisable(() => true),
      new Input()
        .setLabel('Readonly')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setReadonly(() => true),
      new Input()
        .setLabel('Disable and Readonly')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setDisable(() => true)
        .setReadonly(() => true),
      new Input()
        .setLabel('Dark')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setDisable(() => true)
        .setReadonly(() => true)
        .setDarkMode(true)
        .setClass('bg-black'),
      new Input()
        .setLabel('Filled')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setClearable(true),
      new Input()
        .setLabel('Filled')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setType('password'),
      new Input()
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setType('date'),
      new Input()
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setType('time'),
      new Input()
        .setLabel('Autogrow')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setAutogrow(true),
      new Input()
        .setLabel('Preffix and Suffix')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setPrefix('E-mail:')
        .setSuffix('@email.com'),
      new Input()
        .setLabel('Preffix and Suffix')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setHasError(true)
        .setErrorMessage('Error Message'),
      new Input()
        .setLabel('Show if has value')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setShow((field, form) => form.text),
      new Input()
        .setLabel('Show if has value')
        .setModel('text')
        .setClass('col-xs-3')
        .setOutlined(true)
        .setShowInput((field, form) => form.text),
      new Select()
        .setLabel('Standard')
        .setModel('select')
        .setOptions(simpleList)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Filled')
        .setModel('select')
        .setOptions(simpleList)
        .setFilled(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Outlined')
        .setModel('select')
        .setOptions(simpleList)
        .setOutlined(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Standout')
        .setModel('select')
        .setOptions(simpleList)
        .setStandout(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Custom Standout')
        .setModel('select')
        .setOptions(simpleList)
        .setClass('col-xs-3')
        .setStandout('bg-teal text-white'),
      new Select()
        .setLabel('Bordeless')
        .setModel('select')
        .setOptions(simpleList)
        .setClass('col-xs-3')
        .setBorderless(true),
      new Select()
        .setLabel('Rounded')
        .setModel('select')
        .setOptions(simpleList)
        .setRounded(true)
        .setStandout(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Square')
        .setModel('select')
        .setOptions(simpleList)
        .setSquare(true)
        .setOutlined(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Clearable')
        .setModel('select')
        .setOptions(simpleList)
        .setSquare(true)
        .setClearable(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Multiple')
        .setModel('select')
        .setOptions(simpleList)
        .setSquare(true)
        .setMultiple(true)
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Object')
        .setModel('select')
        .setOptions(objectList)
        .setSquare(true)
        .setOptionLabel('label')
        .setOptionValue('value')
        .setClass('col-xs-3'),
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
        .setClass('col-xs-3'),
      new Select()
        .setLabel('Behavior')
        .setModel('select')
        .setOptions(simpleList)
        .setBehavior('dialog')
        .setClass('col-xs-3'),
      new CheckBox()
        .setModel('check')
        .setSize('xl')
        .setLabel('Checkbox'),
      new CheckBox()
        .setModel('check')
        .setSize('xl')
        .setLabel('Color')
        .setColor('teal-5'),
      new Radio()
        .setOptions(objectList)
        .setModel('radio'),
      new Button()
        .setLabel('Button')
        .setColor('teal-5'),
      new Button()
        .setLabel('Button')
        .setColor('teal-5')
        .setRounded(true),
      new ButtonIcon()
        .setIcon('add')
        .setColor('blue')
        .setTextColor('yellow'),
      new ButtonDateIcon()
        .setModel('date')
        .setIcon('date_range')
        .setRound(true)
        .setColor('positive')
    ]

    inputs.forEach(input => {
      this.addField(input)
    })
  }
}
