import TaskFindAllByGroupIdHandler from 'src/app/domain/task/TaskFindAllByGroupIdHandler'

export default class TaskFindAllByGroup {
  constructor (repository) {
    this.taskFindByGroup = new TaskFindAllByGroupIdHandler(repository)
  }

  findByIdGroup (id) {
    return this.taskFindByGroup.findAllByIdGroup(id)
  }
}
