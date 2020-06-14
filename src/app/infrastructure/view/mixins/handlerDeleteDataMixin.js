import handlerActionMixin from 'src/app/infrastructure/view/mixins/handlerActionMixin'
import handlerValidationFormMixin from 'src/app/infrastructure/view/mixins/handlerValidationFormMixin'
import handlerAlertMixin from 'src/app/infrastructure/view/mixins/handlerAlertMixin'

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
        this.showAlert(error, 'red', 'thumb_down')
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
