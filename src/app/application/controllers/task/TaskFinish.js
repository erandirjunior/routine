import TaskFinishHandler from 'src/app/domain/task/TaskFinishHandler'

export default class TaskUpdate {
  constructor (repository) {
    this.taskDelete = new TaskFinishHandler(repository)
  }

  finish (id) {
    return this.taskDelete.finish(id)
  }
}
