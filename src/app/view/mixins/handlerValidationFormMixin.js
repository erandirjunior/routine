export default {
  validations: {
  },
  methods: {
    enableValidationIfHasPropertyWasDefined (property) {
      if (this.$v[property]) {
        this.$v[property].$touch()
        return this.$v[property].$error
      }

      return false
    }
  }
}
