<template>
  <q-list
    :dark="!!dark"
    :separator="!!separator"
    :style="addStyle"
    :class="addClass"
  >
    <q-item v-for="(item, index) in data" :key="getIdentifier(item, index)">
      <slot :row="item" />
    </q-item>
  </q-list>
</template>

<script>
import handlerActionMixin from 'src/app/view/mixins/handlerActionMixin'

export default {
  name: 'ListComponent',
  mixins: [
    handlerActionMixin
  ],
  props: {
    data: {
      type: Array,
      required: true
    },
    section: {
      type: String
    },
    actionName: {
      type: String
    },
    dark: {
      default: () => false
    },
    separator: {
      default: () => false
    },
    addStyle: {
      default: () => ''
    },
    addClass: {
      default: () => ''
    },
    identifier: {
      default: () => null
    }
  },
  methods: {
    getIdentifier (item, key) {
      if (this.identifier) {
        return item[this.identifier]
      }

      return key
    }
  }
}
</script>
