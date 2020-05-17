import TaskFindByGroupIdHandler from 'src/app/domain/task/TaskFindByGroupIdHandler'

export default class TaskFindAll {
  constructor (repository, dateHandler) {
    this.taskFindByGroup = new TaskFindByGroupIdHandler(repository, dateHandler)
  }

  findByIdGroup (id) {
    return this.taskFindByGroup.findByIdGroup(id)
  }
}
