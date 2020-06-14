export default {
  methods: {
    action (emit) {
      const action = typeof emit.action === 'string' ? emit.action : emit.action.action
      this[action](emit)
    }
  }
}
