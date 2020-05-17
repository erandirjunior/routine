import GroupCreateHandler from 'src/app/domain/group/GroupCreateHandler'

export default class GroupCreate {
  constructor (repository) {
    this.group = new GroupCreateHandler(repository)
  }

  create (params) {
    return this.group.create(params.name)
  }
}
