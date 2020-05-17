import GroupDeleteHandler from 'src/app/domain/group/GroupDeleteHandler'

export default class GroupDelete {
  constructor (repository) {
    this.group = new GroupDeleteHandler(repository)
  }

  delete (id) {
    return this.group.delete(id)
  }
}
