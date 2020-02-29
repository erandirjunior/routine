import GroupRepository from 'src/app/infrastructure/repository/GroupRepository'
import GroupHandler from 'src/app/domain/group/GroupHandler'

export default class GroupController {
  constructor () {
    this.task = new GroupHandler(new GroupRepository())
  }

  create () {}

  update () {}

  delete () {}

  index () {}

  find () {}
}
