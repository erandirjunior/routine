import TaskDeleteHandler from 'src/app/domain/task/TaskDeleteHandler'

export default class TaskDelete {
  constructor (repository) {
    this.taskDelete = new TaskDeleteHandler(repository)
  }

  delete (id) {
    return this.taskDelete.delete(id)
  }
}
