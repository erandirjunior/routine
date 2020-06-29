import handlerActionMixin from './handlerActionMixin'
import handlerValidationFormMixin from './handlerValidationFormMixin'
import handlerAlertMixin from './handlerAlertMixin'

export default {
  data () {
    return {
      controllerDelete: '',
      failMessageDelete: '',
      successMessageDelete: ''
    }
  },
  mixins: [
    handlerActionMixin,
    handlerValidationFormMixin,
    handlerAlertMixin
  ],
  methods: {
    delete () {
      this.beforeDelete()
      this.controllerDelete.delete(this.form)
        .then(() => this.afterSuccessDelete())
        .catch((error) => this.afterFailDelete(error))
    },
    beforeDelete () {},
    afterFailDelete (error) {
      if (error) {
        return this.showAlert(error, 'red', 'thumb_down')
      }

      return this.showAlert(this.failMessageDelete, 'red', 'thumb_down')
    },
    afterSuccessDelete () {
      if (this.successMessageDelete) {
        return this.showAlert(this.successMessageDelete, 'green', 'thumb_up')
      }

      this.showAlert('Success to delete data!', 'green', 'thumb_up')
    }
  }
}
