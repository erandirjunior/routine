<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="primary-bg-color">
      <q-toolbar>
        <q-toolbar-title>
          Routine
        </q-toolbar-title>
        <q-space/>
        <q-btn
          round
          flat
          icon="menu"
          color="white"
          stack
          @click="right = !right"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="right"
      side="right"
      bordered
      content-class="primary-bg-color"
    >
      <q-list bordered separator dark>
        <q-item
          clickable
          v-ripple
          v-for="(item, index) in menu"
          :key="index"
          :to="item.to"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section class="text-teal-5">{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="primary-bg-color">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      right: false,
      menu: [
        {
          icon: 'label',
          label: 'Groups',
          to: '/groups'
        },
        {
          icon: 'list_alt',
          label: 'Tasks',
          to: '/tasks'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  .primary-bg-color
    background-color: $bg-color-app !important
  .secondary-bg-color
    background-color: $bg-color-app-secondary !important
</style>
