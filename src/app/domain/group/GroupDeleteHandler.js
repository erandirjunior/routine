export default class GroupDeleteHandler {
  constructor (repository) {
    this.repository = repository
  }

  delete (id) {
    return this.repository.delete(id)
  }
}
