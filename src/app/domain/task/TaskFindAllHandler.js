export default class TaskFindAllHandler {
  constructor (repository, date) {
    this.repository = repository
    this.date = date
  }

  findAll () {
    return this.repository.findAll(this.date.getDate())
  }
}
