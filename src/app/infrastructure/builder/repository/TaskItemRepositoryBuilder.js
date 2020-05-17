import Database from 'src/app/infrastructure/persistense/Database'
import TaskItemRepository from 'src/app/infrastructure/repository/TaskItemRepository'

export default class TaskItemRepositoryBuilder {
  static create () {
    const database = Database.getConnection()

    return new TaskItemRepository(database)
  }
}
