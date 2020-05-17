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
    <q-scroll-area
      horizontal
      style="width: 100%;"
      class="secondary-bg-color rounded-borders"
    >
      <div class="row no-wrap">
        <q-btn
          flat
          size="md"
          color="white"
          style=" margin: 3% 0% 3% 4%"
          label="ALL"
          stack
          @click="loadTasks()"
        />
        <q-btn
          flat
          v-for="item in groups" :key="item.id"
          size="md"
          style=" margin: 3% 2% 3% 4%"
          :color="colorButtons[item.id]"
          :label="item.name"
          stack
          @click="loadTasksByIdGroup(item.id)"
        />
      </div>
    </q-scroll-area>
    <q-scroll-area
      class="list-main secondary-bg-color rounded-borders"
    >
      <list-component
        :data="tasks"
        section="name"
        @action="goToTask"
      />
    </q-scroll-area>
  </q-page>
</template>

<script>
import Database from '../../infrastructure/persistense/Database'
import Tables from '../../infrastructure/persistense/Tables'
import ListComponent from '../../infrastructure/components/list/ListComponent'
import GroupControllerBuilder from '../../infrastructure/builder/controller/GroupControllerBuilder'
import TaskControllerBuilder from '../../infrastructure/builder/controller/TaskControllerBuilder'

export default {
  name: 'PageIndex',
  data () {
    return {
      colorButtons: [],
      color: '',
      fab1: true,
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
    getColor () {
      const colors = this.filterColor(this.color)
      const numberColor = Math.floor(Math.random() * (colors.length - 1))
      this.color = colors[numberColor]
      return colors[numberColor]
    },
    filterColor (removeColor) {
      const colors = [
        'red',
        'blue',
        'yellow',
        'green',
        'grey',
        'orange',
        'indigo',
        'teal',
        'cyan',
        'brown'
      ]

      return colors.filter(item => item !== removeColor)
    },
    loadGroups () {
      this.groupController.findAll()
        .then(data => {
          data.forEach((item) => {
            this.colorButtons[item.id] = this.getColor()
          })
          this.groups = data
        })
    },
    loadTasks () {
      this.taskFindAllController.findAll()
        .then(data => {
          this.tasks = data
        })
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
    goToTask (value) {
      this.$router.push(`/task/${value.item.id}`)
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
    margin-top: 15%;
    border-radius: 0% 2% 2% 0%;
    height: 24em
  }
</style>
