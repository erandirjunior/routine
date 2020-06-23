import { date } from 'quasar'

export default function dateHandler () {
  return {
    date: new Date(),
    addDays (day) {
      this.date = date.addToDate(this.date, { days: day })
    },
    removeDays (day) {
      this.date = date.subtractFromDate(this.date, { days: day })
    },
    getDate (format = 'YYYY-MM-DD', translate = {}) {
      return date.formatDate(this.date, format, translate)
    },
    getDay () {
      return this.date.getDay()
    }
  }
}
