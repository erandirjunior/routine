import TaskItemFindByTaskHandler from 'src/app/domain/taskItem/TaskItemFindByTaskHandler'

export default class TaskItemFindByTask {
  constructor (repository) {
    this.taskItem = new TaskItemFindByTaskHandler(repository)
  }

  findByTaskId (taskId, finalDate) {
    return this.taskItem.findByTaskId(taskId, finalDate)
  }
}
