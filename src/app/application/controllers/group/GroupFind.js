import GroupFindHandler from 'src/app/domain/group/GroupFindHandler'

export default class GroupFind {
  constructor (repository) {
    this.group = new GroupFindHandler(repository)
  }

  find (id) {
    return this.group.find(id)
  }
}
