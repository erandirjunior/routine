export default class GroupHandler {
  constructor (repository) {
    this.repository = repository
  }

  create (name) {
    return this.repository.create(name)
  }

  listAll () {
    return this.repository.findAll()
  }

  update (id, name) {
    return this.repository.update(id, name)
  }

  delete (id) {
    return this.repository.delete(id)
  }

  find (id) {
    return this.repository.find(id)
  }
}
