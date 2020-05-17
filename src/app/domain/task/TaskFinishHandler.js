export default class TaskFinishHandler {
  constructor (repository) {
    this.repository = repository
  }

  finish (id) {
    return this.repository.finish(id)
  }
}
