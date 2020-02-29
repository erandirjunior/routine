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
        />
      </q-toolbar>
    </q-header>

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
