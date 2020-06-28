import TaskItemCreate from 'src/app/application/controllers/taskItem/TaskItemCreate'
import TaskItemRepositoryBuilder from 'src/app/infrastructure/builder/repository/TaskItemRepositoryBuilder'
import TaskItemFindByTask from 'src/app/application/controllers/taskItem/TaskItemFindByTask'
import TaskItemDelete from 'src/app/application/controllers/taskItem/TaskItemDelete'
import TaskItemUpdate from 'src/app/application/controllers/taskItem/TaskItemUpdate'

export default class TaskItemControllerBuilder {
  static create () {
    return new TaskItemCreate(
      TaskItemRepositoryBuilder.create()
    )
  }

  static delete () {
    return new TaskItemDelete(
      TaskItemRepositoryBuilder.create()
    )
  }

  static findByTaskId () {
    return new TaskItemFindByTask(
      TaskItemRepositoryBuilder.create()
    )
  }

  static update () {
    return new TaskItemUpdate(
      TaskItemRepositoryBuilder.create()
    )
  }
}
