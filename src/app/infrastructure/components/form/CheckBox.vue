<template>
  <q-checkbox
    v-model="model"
    :color="field.color"
    :dark="field.dark"
    :disable="field.disable"
    :label="field.label"
    :class="field.inputClass"
    :style="field.style"
  />
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    field: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  computed: {
    model: {
      get () {
        return this.isArray() ? this.form[this.field.model][this.field.position] : this.form[this.field.model]
      },
      set (value) {
        if (this.isArray()) {
          this.setValueInArray(value)

          return 0
        }

        this.form[this.field.model] = value
      }
    }
  },
  methods: {
    setValueInArray (value) {
      this.$set(this.form[this.field.model], this.field.position, value)
    },
    isArray () {
      return this.field.modelIsArray
    }
  }
}
</script>

<style scoped>

</style>
