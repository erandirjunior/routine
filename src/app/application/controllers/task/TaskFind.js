import TaskFindHandler from 'src/app/domain/task/TaskFindHandler'

export default class TaskFind {
  constructor (repository, taskItem) {
    this.taskFind = new TaskFindHandler(repository)
    this.taskItem = taskItem
  }

  find (id) {
    return new Promise((resolve, reject) => {
      this.taskFind.find(id)
        .then(resp => {
          this.taskItem.findByTaskId(id, resp.finalDate)
            .then(r => {
              resp.tasks = r
              resolve(resp)
            })
        })
    })
  }
}
