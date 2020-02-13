export default class Tables {
  constructor (connection) {
    this.connection = connection
  }

  createTable () {
    this.connection.transaction(function (tx) {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS tb_task (
                      id INTEGER PRIMARY KEY,
                      name TEXT NOT NULL,
                      description TEXT,
                      created_at,
                      deleted_at,
                      updated_at
                    )`)
      tx.executeSql(`CREATE TABLE IF NOT EXISTS tb_activity (
                      id INTEGER PRIMARY KEY,
                      task_id INTEGER NOT NULL
                      name TEXT NOT NULL,
                      description TEXT,
                      created_at,
                      deleted_at,
                      updated_at,
                      FOREIGN KEY (task_id)
                      REFERENCES tb_task (id)
                         ON DELETE CASCADE
                         ON UPDATE NO ACTION
                    )`)
    }, function (error) {
      console.log('Transaction ERROR: ' + error.message)
    }, function () {
      console.log('Populated database OK')
    })
  }
}
