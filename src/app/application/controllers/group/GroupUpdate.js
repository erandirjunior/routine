import GroupUpdateHandler from 'src/app/domain/group/GroupUpdateHandler'

export default class GroupUpdate {
  constructor (repository) {
    this.group = new GroupUpdateHandler(repository)
  }

  update (params) {
    return this.group.update(params.id, params.name, params.color)
  }
}
