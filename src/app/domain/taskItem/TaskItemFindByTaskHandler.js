export default class TaskItemFindByTaskHandler {
  constructor (repository) {
    this.repository = repository
  }

  findByTaskId (taskId, finalDate) {
    if (finalDate) {}
    const data = []
    return new Promise((resolve, reject) => {
      this.repository.findByTaskId(taskId)
        .then(results => {
          results.forEach(item => {
            const isFinished = !!item.finished
            data.push({
              id: item.id,
              name: item.name,
              finished: isFinished
            })
          })
          resolve(data)
        })
    })
  }
}
