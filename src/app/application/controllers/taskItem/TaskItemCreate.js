import TaskItemCreateHandler from 'src/app/domain/taskItem/TaskItemCreateHandler'

export default class TaskItemCreate {
  constructor (repository) {
    this.taskItemCreate = new TaskItemCreateHandler(repository)
  }

  create (tasks, taskId) {
    return this.taskItemCreate.create(tasks, taskId)
  }
}
