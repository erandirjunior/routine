export default class Field {
  class = ''
  color = ''
  style = ''
  columnStyle = ''
  disable = () => false
  hide = () => false
  hideColumn = () => false

  constructor () {
    return this
  }

  getFields () {
    return this
  }

  setClass (styleClass) {
    this.class = styleClass

    return this
  }

  setColor (color) {
    this.color = color

    return this
  }

  setDisable (callback) {
    this.disable = callback

    return this
  }

  setHide (callback) {
    this.hide = callback

    return this
  }

  setColumnStyle (columnStyle) {
    this.columnStyle = columnStyle

    return this
  }

  setHideColumn (callback) {
    this.hideColumn = callback

    return this
  }
}
