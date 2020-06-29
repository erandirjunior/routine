import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Icon from 'src/app/infrastructure/components/fields/Icon'

export default class IconListBuilder extends FormBuilder {
  createFields () {
    this.fields = []
  }

  addIcon (color) {
    const icon = new Icon()
      .setIcon('label')
      .setColor(color)
      .setStyle('font-size: 30px !important')

    this.addField(icon)
  }
}
