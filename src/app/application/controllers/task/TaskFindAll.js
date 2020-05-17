import TaskFindAllHandler from 'src/app/domain/task/TaskFindAllHandler'

export default class TaskFindAll {
  constructor (repository, date) {
    this.taskFindAll = new TaskFindAllHandler(repository, date)
  }

  findAll () {
    return this.taskFindAll.findAll()
  }
}
