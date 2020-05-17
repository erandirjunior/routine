export default class TaskItemDeleteHandler {
  constructor (repository) {
    this.repository = repository
  }

  delete (id) {
    return this.repository.delete(id)
  }
}
