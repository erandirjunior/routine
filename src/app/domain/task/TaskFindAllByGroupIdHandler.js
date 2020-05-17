export default class TaskFindAllByGroupIdHandler {
  constructor (repository) {
    this.repository = repository
  }

  findAllByIdGroup (id) {
    return this.repository.findAllByGroupId(id)
  }
}
