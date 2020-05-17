<template>
  <div>
    <q-list dark separator>
      <q-item v-for="(item, key) in data" :key="key">
        <q-item-section>
          <q-item-label>{{ item[section] }}</q-item-label>
        </q-item-section>
        <q-item-section side v-for="(button, index) in buttons" :key="index">
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
    buttons: {
      type: Array
    }
  },
  components: {
    Button,
    CheckBox,
    ButtonIcon,
    Icon
  },
  methods: {
    action (action) {
      this.$emit('action', { action: action })
    }
  }
}
</script>
