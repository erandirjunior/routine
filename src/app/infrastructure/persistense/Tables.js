export default class Tables {
  constructor (connection) {
    this.connection = connection
  }

  createTable () {
    this.createGroupTable()
    this.createTaskTable()
    this.createTaskItemTable()
  }

  createGroupTable () {
    this.connection.transaction(function (tx) {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS tb_group (
                      id INTEGER PRIMARY KEY,
                      name TEXT NOT NULL,
                      color TEXT NOT NULL,
                      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                      deleted_at TEXT,
                      updated_at TEXT
                    )`)
    }, function (error) {
      console.log('Transaction ERROR: ' + error.message)
    }, function () {
      console.log('Table created with success!')
    })
  }

  createTaskTable () {
    this.connection.transaction(function (tx) {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS tb_task (
                      id INTEGER PRIMARY KEY,
                      finished INTEGER DEFAULT 0,
                      title TEXT,
                      group_id INTEGER NOT NULL,
                      created_at TEXT NOT NULL,
                      deleted_at TEXT,
                      updated_at TEXT,
                      FOREIGN KEY(group_id) REFERENCES tb_group(id)
                    )`)
    }, function (error) {
      console.log('Transaction ERROR: ' + error.message)
    }, function () {
      console.log('Table created with success!')
    })
  }

  createTaskItemTable () {
    this.connection.transaction(function (tx) {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS tb_task_item (
                      id INTEGER PRIMARY KEY,
                      description TEXT NOT NULL,
                      task_id INTEGER NOT NULL,
                      finished INTEGER DEFAULT 0,
                      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                      deleted_at TEXT,
                      updated_at TEXT,
                      FOREIGN KEY(task_id) REFERENCES tb_task(id)
                    )`)
    }, function (error) {
      console.log('Transaction ERROR: ' + error.message)
    }, function () {
      console.log('Table created with success!')
    })
  }
}
