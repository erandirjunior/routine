import TaskCreate from 'src/app/application/controllers/task/TaskCreate'
import TaskRepositoryBuilder from 'src/app/infrastructure/builder/repository/TaskRepositoryBuilder'
import TaskFind from 'src/app/application/controllers/task/TaskFind'
import TaskFindAll from 'src/app/application/controllers/task/TaskFindAll'
import TaskDelete from 'src/app/application/controllers/task/TaskDelete'
import TaskFindByGroup from 'src/app/application/controllers/task/TaskFindByGroup'
import TaskItemControllerBuilder from 'src/app/infrastructure/builder/controller/TaskItemControllerBuilder'
import DateHandler from 'src/app/infrastructure/date/DateHandler'
import TaskUpdate from 'src/app/application/controllers/task/TaskUpdate'
import TaskFinish from 'src/app/application/controllers/task/TaskFinish'
import TaskFindAllByGroup from 'src/app/application/controllers/task/TaskAllFindByGroup'

export default class GroupControllerBuilder {
  static create () {
    return new TaskCreate(
      TaskRepositoryBuilder.create(),
      TaskItemControllerBuilder.create(),
      new DateHandler()
    )
  }

  static find () {
    return new TaskFind(
      TaskRepositoryBuilder.create(),
      TaskItemControllerBuilder.findByTaskId()
    )
  }

  static findAll () {
    return new TaskFindAll(
      TaskRepositoryBuilder.create(),
      new DateHandler()
    )
  }

  static delete () {
    return new TaskDelete(
      TaskRepositoryBuilder.create()
    )
  }

  static update () {
    return new TaskUpdate(
      TaskRepositoryBuilder.create()
    )
  }

  static finish () {
    return new TaskFinish(
      TaskRepositoryBuilder.create()
    )
  }

  static findByGroup () {
    return new TaskFindByGroup(
      TaskRepositoryBuilder.create(),
      new DateHandler()
    )
  }

  static findAllByGroup () {
    return new TaskFindAllByGroup(
      TaskRepositoryBuilder.create()
    )
  }
}
