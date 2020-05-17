export default class GroupUpdateHandler {
  constructor (repository) {
    this.repository = repository
  }

  update (id, name) {
    return this.repository.update(id, name)
  }
}
