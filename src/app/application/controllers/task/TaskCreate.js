import TaskCreateHandler from 'src/app/domain/task/TaskCreateHandler'

export default class TaskCreate {
  constructor (repository, taskItem, dateHandler) {
    this.taskCreate = new TaskCreateHandler(repository, dateHandler)
    this.taskItem = taskItem
  }

  create (parameters) {
    return this.taskCreate.create(
      parameters.repeat,
      parameters.groupId,
      parameters.finalDate,
      parameters.title)
      .then(result => {
        result.forEach(item => {
          this.taskItem.create(parameters.tasks, item)
        })
      })
      .catch(() => false)
  }
}
