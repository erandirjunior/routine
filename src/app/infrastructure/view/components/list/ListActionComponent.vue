<template>
  <div>
    <q-list dark separator>
      <q-item v-for="(item, key) in data" :key="key">
        <q-item-section @click="item.action ? action(item.action, item) : ''">
          <q-input :dark="!!dark" :dense="!!dense" :value="item[section]" autogrow readonly borderless />
        </q-item-section>
        <q-item-section side v-for="(button, index) in getComponents(key)" :key="index">
          <component
            :is="button.fieldType"
            :form="item"
            :field="button"
            @action="action"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import Button from '../form/Button'
import CheckBox from '../form/CheckBox'
import ButtonIcon from '../form/ButtonIcon'
import Icon from '../icon/Icon'

export default {
  name: 'ListActionComponent',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    section: {
      type: String
    },
    components: {
      type: Array,
      default: () => []
    },
    useIndexForm: {
      type: String,
      default: () => ''
    },
    keyComponents: {
      type: String,
      default: () => ''
    },
    dark: {
      type: String,
      default: () => ''
    },
    dense: {
      type: String,
      default: () => ''
    }
  },
  components: {
    Button,
    CheckBox,
    ButtonIcon,
    Icon
  },
  methods: {
    action (action, item) {
      this.$emit('action', { action: action, value: item })
    },
    getComponents (key) {
      if (this.useIndexForm) {
        return this.data[key][this.keyComponents]
      }

      return this.components
    }
  }
}
</script>
