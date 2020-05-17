export default class TaskItemCreateHandler {
  constructor (repository) {
    this.repository = repository
  }

  create (tasks, taskId) {
    tasks.forEach(object => {
      const finished = [false, 'false'].includes(object.finished) ? 0 : 1
      this.repository.create(object.name, taskId, finished)
    })
    return Promise.resolve(true)
  }
}
