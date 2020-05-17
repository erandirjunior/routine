export default class GroupFindHandler {
  constructor (repository) {
    this.repository = repository
  }

  find (id) {
    return this.repository.find(id)
  }
}
