<template>
  <q-input
    :ref="field.model"
    v-model="model"
    :label="field.title"
    :color="field.color"
    :dark="field.darkMode"
    :class="field.inputClass"
    :style="field.style"
  />
</template>

<script>
export default {
  name: 'Input',
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
