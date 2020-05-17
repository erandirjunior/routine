export default class TaskDeleteHandler {
  constructor (repository) {
    this.repository = repository
  }

  delete (id) {
    return this.repository.delete(id)
  }
}
