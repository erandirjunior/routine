<template>
  <div>
    <q-list dark separator>
      <q-item v-for="(item, key) in data" :key="key">
        <div  v-if="positionComponents === 'before'" :style="addStyle">
          <q-item-section side v-for="(button, beforeIndex) in getComponents(key)" :key="beforeIndex">
              <component
                :is="button.fieldType"
                :form="item"
                :field="button"
                @action="action"
              />
          </q-item-section>
        </div>

        <q-item-section @click="item.action ? action(item.action, item) : ''">
          <q-input :dark="!!dark" :dense="!!dense" :value="item[section]" autogrow readonly borderless />
        </q-item-section>

        <q-item-section side v-for="(button, afterIndex) in getComponents(key)" :key="afterIndex">
          <div v-if="positionComponents === 'after'" :style="addStyle">
            <component
              :is="button.fieldType"
              :form="item"
              :field="button"
              @action="action"
            />
          </div>
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
import Input from '../form/Input'
import Select from '../form/Select'
import Radio from '../form/Radio'
import RadioGroup from '../form/RadioGroup'

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
    },
    positionComponents: {
      type: String,
      default: () => 'after'
    },
    addStyle: {
      default: () => 'display: contents'
    }
  },
  components: {
    Input,
    Button,
    CheckBox,
    ButtonIcon,
    Select,
    Radio,
    RadioGroup,
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
