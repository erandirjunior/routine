import alert from 'src/app/infrastructure/alert/Alert'

export default {
  data () {
    return {
      controllerCreate: '',
      controllerUpdate: '',
      controllerDelete: '',
      failMessageCreate: '',
      failMessageUpdate: '',
      failMessageDelete: '',
      successMessageCreate: '',
      successMessageUpdate: '',
      successMessageDelete: ''
    }
  },
  validations: {
  },
  methods: {
    create () {
      this.beforeCreate()

      if (!this.enableValidationIfHasPropertyWasDefined('form')) {
        this.controllerCreate.create(this.form)
          .then(() => this.afterSuccessCreate())
          .catch(() => this.afterFailCreate())
      }
    },
    update () {
      this.beforeUpdate()

      if (!this.enableValidationIfHasPropertyWasDefined('form')) {
        this.controllerUpdate.update(this.form)
          .then(() => this.afterSuccessUpdate())
          .catch(() => this.afterFailUpdate())
      }
    },
    delete () {
      this.beforeDelete()
      this.controllerDelete.delete(this.form)
        .then(() => this.afterSuccessDelete())
        .catch(() => this.afterFailDelete())
    },
    action (emit) {
      const action = typeof emit.action === 'string' ? emit.action : emit.action.action
      this[action](emit)
    },
    beforeCreate () {},
    beforeUpdate () {},
    beforeDelete () {},
    afterFailCreate () {
      if (this.failMessageCreate) {
        return this.showAlert(this.failMessageCreate, 'red', 'thumb_down')
      }

      this.showAlert('Fail to save data!', 'red', 'thumb_down')
    },
    afterFailUpdate () {
      if (this.failMessageUpdate) {
        return this.showAlert(this.failMessageUpdate, 'red', 'thumb_down')
      }

      this.showAlert('Fail to update data!', 'red', 'thumb_down')
    },
    afterFailDelete () {
      if (this.failMessageDelete) {
        return this.showAlert(this.failMessageDelete, 'red', 'thumb_down')
      }

      this.showAlert('Fail to delete data!', 'red', 'thumb_down')
    },
    afterSuccessCreate () {
      if (this.successMessageCreate) {
        return this.showAlert(this.successMessageCreate, 'green', 'thumb_up')
      }

      this.showAlert('Success to save data!', 'green', 'thumb_up')
    },
    afterSuccessUpdate () {
      if (this.successMessageUpdate) {
        return this.showAlert(this.successMessageUpdate, 'green', 'thumb_up')
      }

      this.showAlert('Success to update data!', 'green', 'thumb_up')
    },
    afterSuccessDelete () {
      if (this.successMessageDelete) {
        return this.showAlert(this.successMessageDelete, 'green', 'thumb_up')
      }

      this.showAlert('Success to delete data!', 'green', 'thumb_up')
    },
    showAlert (message, color, icon) {
      alert(message, color, icon)
    },
    enableValidationIfHasPropertyWasDefined (property) {
      if (this.$v.hasOwnProperty(property)) {
        this.$v.form.$touch()
        return this.$v.form.$error
      }

      return false
    }
  }
}
