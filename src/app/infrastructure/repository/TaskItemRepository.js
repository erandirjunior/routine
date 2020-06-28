export default class TaskItemRepository {
  constructor (connection) {
    this.connection = connection
  }

  create (description, taskId, finished) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('INSERT INTO tb_task_item (description, task_id, finished) VALUES (?, ?, ?)',
          [description, taskId, finished],
          function (tx, results) {
            resolve(results.insertId)
          },
          function () {
            reject(0)
          })
      })
    })
  }

  update (id, finished, description) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('UPDATE tb_task_item SET updated_at = datetime(\'now\'), finished = ?, description = ? WHERE id = ?',
          [finished, description, id],
          function (tx, results) {
            resolve(true)
          },
          function (error) {
            reject(error)
          })
      })
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('UPDATE tb_task_item SET deleted_at = datetime(\'now\') WHERE id = ?',
          [id],
          function (tx, results) {
            resolve(true)
          },
          function () {
            reject(false)
          })
      })
    })
  }

  findByTaskId (taskId) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('SELECT * FROM tb_task_item WHERE task_id = ? AND deleted_at IS NULL',
          [taskId],
          function (tx, rs) {
            const data = []

            for (let i = 0; i < rs.rows.length; i++) {
              data.push({
                id: rs.rows.item(i).id,
                name: rs.rows.item(i).description,
                finished: rs.rows.item(i).finished
              })
            }

            resolve(data)
          },
          function () {
            reject(0)
          })
      })
    })
  }

  findByTaskIdWithCurrentDate (description, taskId) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('INSERT INTO tb_task_item (description, task_id) VALUES (?, ?)',
          [description, taskId],
          function (tx, results) {
            resolve(results.insertId)
          },
          function () {
            reject(0)
          })
      })
    })
  }
}
