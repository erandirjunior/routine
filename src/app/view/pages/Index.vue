<template>
  <q-page class="text-white">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        class="secundary-color"
        color="#282828"
        to="/tasks"
      />
    </q-page-sticky>

    <div class="row q-col-gutter-sm">
      <q-list dark separator class="col-xs-12">
        <q-item clickable v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Item with caption</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>OVERLINE</q-item-label>
            <q-item-label>Item with caption</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-dialog v-model="alert">
      olá
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      alert: false
    }
  },
  methods: {
    createDatabase () {
      document.addEventListener('deviceready', () => {
        const db = window.sqlitePlugin.openDatabase({
          name: 'my.db',
          location: 'default'
        })
        this.createTables(db)
      })
    },
    createTables (db) {
      console.log(db)
      db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)')
        tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101])
        tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202])
        tx.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function (tx, rs) {
          console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount)
        }, function (tx, error) {
          console.log('SELECT error: ' + error.message)
        })
      }, function (error) {
        console.log('Transaction ERROR: ' + error.message)
      }, function () {
        console.log('Populated database OK')
      })
    }
  },
  created () {
    console.log('aqui')
  }
}
</script>
