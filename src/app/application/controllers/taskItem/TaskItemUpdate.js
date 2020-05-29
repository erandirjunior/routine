import TaskItemUpdateHandler from 'src/app/domain/taskItem/TaskItemUpdateHandler'

export default class TaskItemUpdate {
  constructor (repository) {
    this.taskItemCreate = new TaskItemUpdateHandler(repository)
  }

  update (id, finished, description) {
    return this.taskItemCreate.update(id, finished, description)
  }
}
