import TaskItemDeleteHandler from 'src/app/domain/taskItem/TaskItemDeleteHandler'

export default class TaskItemDelete {
  constructor (repository) {
    this.taskItemCreate = new TaskItemDeleteHandler(repository)
  }

  delete (id) {
    return this.taskItemCreate.delete(id)
  }
}
