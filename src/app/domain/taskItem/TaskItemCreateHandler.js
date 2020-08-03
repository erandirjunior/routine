export default class TaskItemCreateHandler {
  constructor (repository) {
    this.repository = repository
  }

  create (tasks, taskId) {
    tasks.forEach(object => {
      this.repository.create(object.name, taskId, object.finished)
    })
    return Promise.resolve(true)
  }
}
