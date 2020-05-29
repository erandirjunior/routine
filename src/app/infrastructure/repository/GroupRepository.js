export default class GroupRepository {
  constructor (connection) {
    this.connection = connection
  }

  create (name, color) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql('INSERT INTO tb_group (name, color) VALUES (?, ?)',
          [name, color],
          function (tx, results) {
            resolve(true)
          }, function () {
            reject(false)
          })
      })
    })
  }

  findAll () {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('SELECT * FROM tb_group WHERE deleted_at IS NULL',
          [],
          function (tx, rs) {
            const data = []

            for (let i = 0; i < rs.rows.length; i++) {
              data.push({
                id: rs.rows.item(i).id,
                name: rs.rows.item(i).name,
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
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('SELECT * FROM tb_group WHERE id = ?',
          [id],
          function (tx, rs) {
            const data = {
              id: rs.rows.item(0).id,
              name: rs.rows.item(0).name,
              color: rs.rows.item(0).color
            }

            resolve(data)
          }, function (error) {
            reject(error)
          })
      })
    })
  }

  findByName (name) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('SELECT * FROM tb_group WHERE name = ? AND deleted_at IS NULL',
          [name],
          function (tx, rs) {
            if (rs.rows.length) {
              return resolve(true)
            }

            resolve(false)
          }, function (error) {
            reject(error)
          })
      })
    })
  }

  findByNameAndDifferentId (name, id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('SELECT * FROM tb_group WHERE name = ? AND id != ? AND deleted_at IS NULL',
          [name, id],
          function (tx, rs) {
            if (rs.rows.length) {
              return resolve(true)
            }

            resolve(false)
          }, function (error) {
            reject(error)
          })
      })
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('UPDATE tb_group SET deleted_at = datetime(\'now\') WHERE id = ?',
          [id],
          function (tx, rs) {
            resolve(true)
          }, function () {
            reject(false)
          })
      })
    })
  }

  update (id, name, color) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('UPDATE tb_group SET updated_at = datetime(\'now\'), name = ?, color = ? WHERE id = ?', [name, color, id], function (tx, rs) {
          resolve(true)
        }, function () {
          reject(false)
        })
      })
    })
  }
}
