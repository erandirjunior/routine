import Database from 'src/app/infrastructure/persistense/Database'
import GroupRepository from 'src/app/infrastructure/repository/GroupRepository'

export default class GroupRepositoryBuilder {
  static create () {
    const database = Database.getConnection()

    return new GroupRepository(database)
  }
}
