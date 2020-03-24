export default class GroupRepository {
  constructor (connection) {
    this.connection = connection
  }

  create (name) {
    this.connection.transaction(function (tx) {
      tx.executeSql('INSERT INTO tb_group (name) VALUES (?)', [name])

      return true
    }, function () {
      return false
    })
  }

  findAll () {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('SELECT * FROM tb_group WHERE deleted_at IS NULL', [], function (tx, rs) {
          const data = []

          for (let i = 0; i < rs.rows.length; i++) {
            data.push({ id: rs.rows.item(i).id, name: rs.rows.item(i).name })
          }

          resolve(data)
        }, function (error) {
          console.log(error)
        })
      })
    })
  }

  find (id) {
    return new Promise((resolve, reject) => {
      this.connection.transaction((tx) => {
        tx.executeSql('SELECT * FROM tb_group WHERE id = ?', [id], function (tx, rs) {
          const data = {
            id: rs.rows.item(0).id,
            name: rs.rows.item(0).name
          }

          resolve(data)
        }, function (error) {
          console.log(error)
        })
      })
    })
  }

  delete (id) {
    this.connection.transaction((tx) => {
      tx.executeSql('UPDATE tb_group SET deleted_at = datetime(\'now\') WHERE id = ?', [id], function (tx, rs) {
        return true
      }, function () {
        return false
      })
    })
  }

  update (id, name) {
    this.connection.transaction((tx) => {
      tx.executeSql('UPDATE tb_group SET updated_at = datetime(\'now\'), name = ? WHERE id = ?', [name, id], function (tx, rs) {
        return true
      }, function () {
        return false
      })
    })
  }
}
