<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="primary-bg-color">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'EmptyLayout',
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
