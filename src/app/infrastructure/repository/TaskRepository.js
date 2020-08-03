export default class TaskRepository {
  constructor (connection) {
    this.connection = connection
  }

  create (groupId, date, title) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('INSERT INTO tb_task (group_id, created_at, title) VALUES (?, ?, ?)',
          [groupId, date, title],
          function (tx, results) {
            resolve(results.insertId)
          },
          function () {
            reject(0)
          })
      })
    })
  }

  findAll (date) {
    const query = `SELECT
                      T.id,
                      T.created_at,
                      T.title,
                      G.color
                    FROM
                      tb_task T
                      INNER JOIN tb_group G ON G.id = T.group_id
                    WHERE
                      T.deleted_at IS NULL AND
                      T.finished = 0 AND
                      G.deleted_at IS NULL AND
                      (T.created_at = ? OR T.finished = 0) AND
                      T.created_at <= ?
                      `

    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql(query, [date, date], function (tx, rs) {
          const data = []

          for (let i = 0; i < rs.rows.length; i++) {
            data.push({
              id: rs.rows.item(i).id,
              title: rs.rows.item(i).title,
              created: rs.rows.item(i).created_at,
              color: rs.rows.item(i).color
            })
          }

          resolve(data)
        }, function (error) {
          reject(error)
        })
      })
    })
  }

  findByGroupId (id, date) {
    const query = `SELECT
                      T.id,
                      T.created_at,
                      T.title,
                      G.color
                    FROM
                      tb_task T
                      INNER JOIN tb_group G ON G.id = T.group_id
                    WHERE
                      T.deleted_at IS NULL AND
                      T.finished = 0 AND
                      G.deleted_at IS NULL AND
                      (T.created_at = ? OR T.finished = 0) AND
                      T.created_at <= ? AND
                      G.id = ?`
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql(query, [date, date, id], function (tx, rs) {
          const data = []

          for (let i = 0; i < rs.rows.length; i++) {
            data.push({
              id: rs.rows.item(i).id,
              title: rs.rows.item(i).title,
              created: rs.rows.item(i).created_at,
              color: rs.rows.item(i).color
            })
          }

          resolve(data)
        }, function (error) {
          reject(error)
        })
      })
    })
  }

  find (id) {
    const query = 'SELECT * FROM tb_task WHERE id = ?'
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql(query, [id], function (tx, rs) {
          resolve({
            id: rs.rows.item(0).id,
            name: rs.rows.item(0).title,
            groupId: rs.rows.item(0).group_id,
            date: rs.rows.item(0).date,
            created: rs.rows.item(0).created_at
          })
        }, function (error) {
          reject(error)
        })
      })
    })
  }

  update (id, title, groupId) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('UPDATE tb_task SET updated_at = datetime(\'now\'), title = ?, group_id = ? WHERE id = ?',
          [title, groupId, id], function (tx, rs) {
            resolve(true)
          }, function () {
            reject(false)
          })
      })
    })
  }

  finish (id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('UPDATE tb_task SET updated_at = datetime(\'now\'), finished = 1 WHERE id = ?',
          [id], function (tx, rs) {
            resolve(true)
          }, function () {
            reject(false)
          })
      })
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('UPDATE tb_task SET deleted_at = datetime(\'now\') WHERE id = ?', [id], function (tx, rs) {
          resolve(true)
        }, function () {
          reject(false)
        })
      })
    })
  }

  finishTask (id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('UPDATE tb_task SET update_at = datetime(\'now\'), finished = 1 WHERE id = ?', [id], function (tx, rs) {
          resolve(true)
        }, function () {
          reject(false)
        })
      })
    })
  }

  findAllByGroupId (id) {
    const query = `SELECT
                      T.id,
                      T.created_at,
                      CASE
                        WHEN T.title IS NULL THEN G.name || ' - ' || T.created_at
                        ELSE T.title || ' - ' || T.created_at
                      END name
                    FROM
                      tb_task T
                      INNER JOIN tb_group G ON G.id = T.group_id
                    WHERE
                      T.deleted_at IS NULL AND
                      T.finished = 0 AND
                      G.deleted_at IS NULL AND
                      G.id = ?`
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql(query, [id], function (tx, rs) {
          const data = []

          for (let i = 0; i < rs.rows.length; i++) {
            data.push({
              id: rs.rows.item(i).id,
              name: rs.rows.item(i).name,
              created: rs.rows.item(i).created_at
            })
          }

          resolve(data)
        }, function (error) {
          reject(error)
        })
      })
    })
  }
}
