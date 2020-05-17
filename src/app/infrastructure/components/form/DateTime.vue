<template>
  <q-input
    filled
    :value="model"
    :label="field.label"
    :readonly="field.readonly(field, form)"
    :disable="field.disable(field, form)"
    :dark="field.darkMode"
    :style="field.style"
    :class="field.inputClass"
    v-if="field.show(field, form)"
  >
    <template v-slot:prepend v-if="field.showDate">
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale" minimal disable>
          <q-date
            v-model="model"
            :mask="field.mask"
            :dark="field.darkMode"
            @input="enableTime()"
          />
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append v-if="field.showHour">
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy ref="qTimeProxy" transition-show="scale" transition-hide="scale">
          <q-time
            v-model="model"
            :mask="field.mask"
            format24h @input="() => $refs.qTimeProxy.hide()"/>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
import formComponentMixin from '../../mixins/formComponentMixin'

export default {
  name: 'DateTime',
  mixins: [
    formComponentMixin
  ],
  methods: {
    enableTime () {
      this.$refs.qDateProxy.hide()

      if (this.field.showHour) {
        this.$refs.qTimeProxy.show()
      }
    }
  }
}
</script>

<style scoped>

</style>
