export default class TaskCreateHandler {
  constructor (repository, dateHandler) {
    this.repository = repository
    this.dateHander = dateHandler
    this.ids = []
  }

  create (groupId, title, dates) {
    this.ids = []

    if (title === '') {
      title = null
    }

    return this.saveIfRepeatModeIsOne(groupId, title, dates)
      .then(() => this.ids)
  }

  saveIfRepeatModeIsOne (groupId, title, dates) {
    if ([1, '1'].includes(dates.mode)) {
      const days = this.setWeekDaysIfValueIsEmpty(dates.days)
      const date = this.setDateIfValueIsEmpty(dates.date)
      return this.saveDate(date, days, groupId, title)
    }

    return this.saveIfRepeatModeIsTwo(groupId, title, dates)
  }

  async saveDate (date, days, groupId, title) {
    while (date >= this.dateHander.getDate()) {
      if (days.includes(this.dateHander.getDay())) {
        await this.insertValue(groupId, this.dateHander.getDate(), title)

        continue
      }

      this.dateHander.addDays(1)
    }
  }

  async saveSpecificDate (date, groupId, title) {
    await this.insertValue(groupId, date, title)
  }

  saveIfRepeatModeIsTwo (groupId, title, dates) {
    if (dates.dates.length === 0) {
      dates.dates = [this.dateHander.getDate()]
    }

    let result = ''

    dates.dates.forEach(item => {
      if (item) {
        result = this.saveSpecificDate(item, groupId, title)
      }
    })

    return result
  }

  setDateIfValueIsEmpty (date) {
    if (date) {
      return date
    }

    return this.dateHander.getDate()
  }

  setWeekDaysIfValueIsEmpty (days) {
    if (days.length > 0) {
      return days
    }

    return [0, 1, 2, 3, 4, 5, 6]
  }

  async insertValue (groupId, date, title) {
    await this.repository.create(groupId, date, title)
      .then(id => {
        this.ids.push(id)
        this.count++
        this.dateHander.addDays(1)
        return this.ids
      })
  }
}
