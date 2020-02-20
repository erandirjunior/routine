export default {
  data () {
    return {
      controller: ''
    }
  },
  method: {
    beforeCreate () {},
    beforeUpdate () {},
    beforeDelete () {},
    afterCreate () {},
    afterUpdate () {},
    aftereDelete () {},
    create () {
      this.beforeCreate()
      this.controller.create(this.form)
      this.afterCreate()
    },
    update () {
      this.beforeUpdate()
      this.controller.update(this.form)
      this.afterUpdate()
    },
    delete () {
      this.beforeDelete()
      this.controller.create(this.form)
      this.aftereDelete()
    }
  }
}
