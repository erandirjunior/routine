export default class GroupCreateHandler {
  constructor (repository) {
    this.repository = repository
  }

  create (name) {
    return this.repository.create(name)
  }
}
