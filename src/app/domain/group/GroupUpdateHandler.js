export default class GroupUpdateHandler {
  constructor (repository) {
    this.repository = repository
  }

  update (id, name, color) {
    return new Promise((resolve, reject) => {
      this.saveIfUniqueName(resolve, reject, name, color, id)
    })
  }

  async saveIfUniqueName (resolve, reject, name, color, id) {
    await this.repository.findByNameAndDifferentId(name, id)
      .then(result => {
        if (result) {
          return reject('This name is already in use!')
        }

        resolve(this.repository.update(id, name, color))
      })
  }
}
