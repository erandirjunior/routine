import GroupFindAllHandler from 'src/app/domain/group/GroupFindAllHandler'

export default class GroupFindAll {
  constructor (repository) {
    this.group = new GroupFindAllHandler(repository)
  }

  findAll () {
    return this.group.findAll()
  }
}
