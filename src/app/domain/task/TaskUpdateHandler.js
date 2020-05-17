export default class TaskUpdateHandler {
  constructor (repository) {
    this.repository = repository
  }

  update (id, title, groupId) {
    if (title === '') {
      title = null
    }

    return this.repository.update(id, title, groupId)
  }
}
