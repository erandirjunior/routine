export default class GroupCreateHandler {
  constructor (repository) {
    this.repository = repository
  }

  create (name, color) {
    return new Promise((resolve, reject) => {
      this.saveIfUniqueName(resolve, reject, name, color)
    })
  }

  async saveIfUniqueName (resolve, reject, name, color) {
    await this.repository.findByName(name)
      .then(result => {
        if (result) {
          return reject('This name is already in use!')
        }

        resolve(this.repository.create(name, color))
      })
  }
}
