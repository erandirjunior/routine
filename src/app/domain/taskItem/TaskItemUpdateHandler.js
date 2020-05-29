export default class TaskItemUpdateHandler {
  constructor (repository) {
    this.repository = repository
  }

  update (id, finished, description) {
    return this.repository.update(id, finished, description)
  }
}
