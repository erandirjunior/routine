<template>
  <div>
    <q-list dark separator>
      <q-item v-for="(item, key) in data" :key="key">
        <div  v-if="positionComponents === 'before'" style="display: contents">
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
          <div  v-if="positionComponents === 'after'" style="display: contents">
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
import Input from 'src/app/infrastructure/view/components/form/Input'
import Textarea from 'src/app/infrastructure/view/components/form/Textarea'
import Select from 'src/app/infrastructure/view/components/form/Select'
import DateTime from 'src/app/infrastructure/view/components/form/DateTime'
import ButtonDateIcon from 'src/app/infrastructure/view/components/form/ButtonDateIcon'
import Radio from 'src/app/infrastructure/view/components/form/Radio'
import RadioGroup from 'src/app/infrastructure/view/components/form/RadioGroup'

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
    }
  },
  components: {
    Input,
    Textarea,
    Button,
    CheckBox,
    ButtonIcon,
    Select,
    DateTime,
    ButtonDateIcon,
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
