export default class TaskFindByGroupIdHandler {
  constructor (repository, dateHandler) {
    this.repository = repository
    this.dateHandler = dateHandler
  }

  findByIdGroup (id) {
    return this.repository.findByGroupId(id, this.dateHandler.getDate())
  }
}
