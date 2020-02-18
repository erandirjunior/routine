<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="secundary-color">
      <q-toolbar>
        <q-toolbar-title>
          Lista de Tarefas
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
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

<style>
  .secundary-color {
    background-color: #E63636 !important;
  }
</style>
