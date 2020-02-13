export default class Database {
  static getConnection () {
    const db = window.sqlitePlugin.openDatabase({
      name: 'task.db',
      location: 'default'
    })

    return db
  }
}

