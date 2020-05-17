import GroupRepositoryBuilder from 'src/app/infrastructure/builder/repository/GroupRepositoryBuilder'
import GroupCreate from 'src/app/application/controllers/group/GroupCreate'
import GroupFind from 'src/app/application/controllers/group/GroupFind'
import GroupFindAll from 'src/app/application/controllers/group/GroupFindAll'
import GroupDelete from 'src/app/application/controllers/group/GroupDelete'
import GroupUpdate from 'src/app/application/controllers/group/GroupUpdate'

export default class GroupControllerBuilder {
  static create () {
    return new GroupCreate(
      GroupRepositoryBuilder.create()
    )
  }

  static find () {
    return new GroupFind(
      GroupRepositoryBuilder.create()
    )
  }

  static findAll () {
    return new GroupFindAll(
      GroupRepositoryBuilder.create()
    )
  }

  static delete () {
    return new GroupDelete(
      GroupRepositoryBuilder.create()
    )
  }

  static update () {
    return new GroupUpdate(
      GroupRepositoryBuilder.create()
    )
  }
}
