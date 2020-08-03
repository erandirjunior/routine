export default {
  props: {
    field: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    validation: {
      type: Object
    }
  },
  computed: {
    error () {
      if (this.validation !== undefined) {
        if (this.validation.form[this.field.model]) {
          return this.validation.form[this.field.model].$error
        }
      }

      return false
    },
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
    action (action) {
      if (action) {
        this.$emit('action', { action: action, value: this.form, field: this.field })
      }
    },
    setValueInArray (value) {
      this.$set(this.form[this.field.model], this.field.position, value)
    },
    isArray () {
      return this.field.modelIsArray
    }
  }
}
