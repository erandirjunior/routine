import GroupHandler from 'src/app/domain/group/GroupHandler'
import GroupRepositoryBuilder from 'src/app/infrastructure/builder/repository/GroupRepositoryBuilder'

export default class GroupController {
  constructor () {
    this.group = new GroupHandler(GroupRepositoryBuilder.create())
  }

  create (params) {
    this.group.create(params.name)
  }

  update (params) {
    this.group.update(params.id, params.name)
  }

  delete (id) {
    this.group.delete(id)
  }

  index () {
    return this.group.listAll()
  }

  find (id) {
    return this.group.find(id)
  }
}
