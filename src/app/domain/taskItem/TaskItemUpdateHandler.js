export default class TaskItemUpdateHandler {
  constructor (repository) {
    this.repository = repository
  }

  update (id, finished) {
    return this.repository.update(id, finished)
  }
}
