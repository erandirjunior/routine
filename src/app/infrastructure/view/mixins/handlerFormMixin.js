import alert from 'src/app/infrastructure/components/alert/Alert'

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
          .catch((error) => this.afterFailCreate(error))
      }
    },
    update () {
      this.beforeUpdate()

      if (!this.enableValidationIfHasPropertyWasDefined('form')) {
        this.controllerUpdate.update(this.form)
          .then(() => this.afterSuccessUpdate())
          .catch((error) => this.afterFailUpdate(error))
      }
    },
    delete () {
      this.beforeDelete()
      this.controllerDelete.delete(this.form)
        .then(() => this.afterSuccessDelete())
        .catch((error) => this.afterFailDelete(error))
    },
    action (emit) {
      const action = typeof emit.action === 'string' ? emit.action : emit.action.action
      this[action](emit)
    },
    beforeCreate () {},
    beforeUpdate () {},
    beforeDelete () {},
    afterFailCreate (error) {
      const defaultMessage = 'Fail to save data!'

      return this.failMessage(error, this.failMessageCreate, defaultMessage)
    },
    afterFailUpdate (error) {
      const defaultMessage = 'Fail to update data!'

      return this.failMessage(error, this.failMessageUpdate, defaultMessage)
    },
    afterFailDelete (error) {
      const defaultMessage = 'Fail to delete data!'

      return this.failMessage(error, this.failMessageDelete, defaultMessage)
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
    failMessage (errorMessage, errorMessageAttribute, errorMessageDefault) {
      if (errorMessage) {
        return this.showAlert(errorMessage, 'red', 'thumb_down')
      }

      if (errorMessageAttribute) {
        return this.showAlert(errorMessageAttribute, 'red', 'thumb_down')
      }

      this.showAlert(errorMessageDefault, 'red', 'thumb_down')
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
