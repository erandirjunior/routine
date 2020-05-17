export default class TaskCreateHandler {
  constructor (repository, dateHandler) {
    this.repository = repository
    this.dateHander = dateHandler
    this.ids = []
  }

  create (repeat, groupId, finalDate, title) {
    this.ids = []

    if (title === '') {
      title = null
    }

    if (finalDate === '' || !repeat) {
      return this.saveTaskWithoutRepetion(groupId, this.dateHander.getDate(), title)
    }

    return this.saveTaskWithRepetition(groupId, finalDate, title)
  }

  async saveTaskWithRepetition (groupId, finalDate, title) {
    while (finalDate >= this.dateHander.getDate()) {
      await this.insertValue(groupId, this.dateHander.getDate(), title)
    }

    return this.ids
  }

  async saveTaskWithoutRepetion (groupId, date, title) {
    await this.insertValue(groupId, date, title)

    return this.ids
  }

  async insertValue (groupId, date, title) {
    await this.repository.create(groupId, date, title)
      .then(id => {
        this.ids.push(id)
        this.dateHander.addDays(1)
      })
  }
}
