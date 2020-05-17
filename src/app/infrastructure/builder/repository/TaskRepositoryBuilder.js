import Database from 'src/app/infrastructure/persistense/Database'
import TaskRepository from 'src/app/infrastructure/repository/TaskRepository'

export default class TaskRepositoryBuilder {
  static create () {
    const database = Database.getConnection()

    return new TaskRepository(database)
  }
}
