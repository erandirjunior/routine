export default class Database {
  static getConnection () {
    const db = window.sqlitePlugin.openDatabase({
      name: 'routine.db',
      location: 'default'
    })

    return db
  }
}
