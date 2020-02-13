import TaskRepository from 'src/app/infrastructure/Repository/TaskRepository'
import Task from 'src/app/domain/task/Task'

export default class TaskController {
  constructor () {
    this.task = new Task(new TaskRepository())
  }

  create () {}

  update () {}

  delete () {}

  index () {}

  find () {}
}
