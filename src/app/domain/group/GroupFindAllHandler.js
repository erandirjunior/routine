export default class GroupFindAllHandler {
  constructor (repository) {
    this.repository = repository
  }

  findAll () {
    return this.repository.findAll()
  }
}
