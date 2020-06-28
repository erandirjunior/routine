import { date } from 'quasar'

export default function dateHandler () {
  return {
    date: new Date(),
    addDate (object) {
      this.date = date.addToDate(this.date, object)
    },
    removeDate (object) {
      this.date = date.subtractFromDate(this.date, object)
    },
    getDate (format = 'YYYY-MM-DD', translate = {}) {
      return date.formatDate(this.date, format, translate)
    },
    getDay () {
      return this.date.getDay()
    }
  }
}
