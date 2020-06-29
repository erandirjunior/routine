export default {
  methods: {
    action (emit) {
      if (typeof emit.action === 'string' && emit.action !== '') {
        return this[emit.action](emit)
      }

      if (emit.action.action !== '') {
        return this[emit.action.action](emit)
      }
    }
  }
}
