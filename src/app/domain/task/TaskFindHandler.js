export default class TaskFindHandler {
  constructor (repository) {
    this.repository = repository
  }

  find (id) {
    return this.repository.find(id)
  }
}
