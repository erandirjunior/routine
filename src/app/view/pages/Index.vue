<template>
  <q-page class="text-black">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="teal-5"
        to="/task"
      />
    </q-page-sticky>
    <div class="menu-scroll secondary-bg-color">
      <div class="row no-wrap">
        <q-btn
          flat
          v-for="item in groups" :key="item.id"
          size="md"
          style="margin: 2% 0% 0%"
          :color="item.color"
          :label="item.name"
          stack
          @click="loadTasks(item.id)"
        />
      </div>
    </div>
    <q-scroll-area
      class="list-main secondary-bg-color rounded-borders"
    >
      <list-component separator="true" :data="tasks" :dark="true" style="margin: 0% 4%">
        <div slot-scope="row" style="display: contents;">
          <q-item-section style="margin: 2% 0%" @click="goToTask(row.row.id)">
            <q-item-label class="text-white">{{ row.row.title }}</q-item-label>
            <q-item-label caption>Created in: {{ formatDate(row.row.created) }}</q-item-label>
          </q-item-section>

          <q-item-section side @click="goToTask(row.row.id)">
            <q-icon name="label" :color="row.row.color" size="md"/>
          </q-item-section>
        </div>
      </list-component>
    </q-scroll-area>
  </q-page>
</template>

<script>
import Database from '../../infrastructure/persistense/Database'
import Tables from '../../infrastructure/persistense/Tables'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'
import ListComponent from 'components/general/list/ListComponent'

export default {
  name: 'PageIndex',
  data () {
    return {
      visible: false,
      colorButtons: [],
      color: '',
      tasks: [],
      groups: [],
      groupController: GroupControllerBuilder.findAll(),
      taskFindAllController: TaskControllerBuilder.findAll(),
      taskFindByGroupController: TaskControllerBuilder.findByGroup()
    }
  },
  components: {
    ListComponent
  },
  methods: {
    formatDate (date) {
      return date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1')
    },
    loadGroups () {
      this.groupController.findAll()
        .then(data => {
          this.groups = data
          this.groups.unshift({
            color: 'white',
            name: 'ALL'
          })
        })
    },
    loadAllTasks () {
      this.taskFindAllController.findAll()
        .then(data => {
          this.tasks = data
        })
    },
    loadTasks (id = null) {
      if (id) {
        return this.loadTasksByIdGroup(id)
      }

      this.loadAllTasks()
    },
    loadTasksByIdGroup (id) {
      this.taskFindByGroupController.findByIdGroup(id)
        .then(data => {
          this.tasks = data
        })
    },
    createTableIfNotExists () {
      const database = Database.getConnection()
      const tables = new Tables(database)
      tables.createTable()
    },
    goToTask (id) {
      this.$router.push(`/task/${id}`)
    }
  },
  created () {
    this.createTableIfNotExists()
    this.loadGroups()
    this.loadTasks()
  }
}
</script>

<style>
  .list-main {
    width: 90%;
    margin-top: 9%;
    border-radius: 0% 2% 2% 0%;
    height: 27em
  }
  div.menu-scroll {
    margin: 0% 0% 0% !important;
    padding: 3%;
    overflow: auto;
    white-space: nowrap;
  }
</style>
