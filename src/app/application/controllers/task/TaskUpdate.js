import TaskUpdateHandler from 'src/app/domain/task/TaskUpdateHandler'

export default class TaskUpdate {
  constructor (repository) {
    this.taskDelete = new TaskUpdateHandler(repository)
  }

  update (parameters) {
    return this.taskDelete.update(parameters.id, parameters.title, parameters.groupId)
  }
}
