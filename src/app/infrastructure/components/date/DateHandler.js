import { date } from 'quasar'

export default class DateHandler {
  constructor () {
    this.date = new Date()
  }

  addDays (day) {
    this.date = date.addToDate(this.date, { days: day })
  }

  getDate () {
    return date.formatDate(this.date, 'YYYY-MM-DD')
  }
}
