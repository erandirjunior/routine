import handlerActionMixin from 'src/app/infrastructure/view/mixins/handlerActionMixin'
import handlerValidationFormMixin from 'src/app/infrastructure/view/mixins/handlerValidationFormMixin'
import handlerAlertMixin from 'src/app/infrastructure/view/mixins/handlerAlertMixin'

export default {
  data () {
    return {
      controllerUpdate: '',
      failMessageUpdate: '',
      successMessageUpdate: ''
    }
  },
  mixins: [
    handlerActionMixin,
    handlerValidationFormMixin,
    handlerAlertMixin
  ],
  methods: {
    update () {
      this.beforeUpdate()

      if (!this.enableValidationIfHasPropertyWasDefined('form')) {
        this.controllerUpdate.update(this.form)
          .then(() => this.afterSuccessUpdate())
          .catch((error) => this.afterFailUpdate(error))
      }
    },
    beforeUpdate () {},
    afterFailUpdate (error) {
      if (error) {
        this.showAlert(error, 'red', 'thumb_down')
      }

      return this.showAlert(this.failMessageUpdate, 'red', 'thumb_down')
    },
    afterSuccessUpdate () {
      if (this.successMessageUpdate) {
        return this.showAlert(this.successMessageUpdate, 'green', 'thumb_up')
      }

      this.showAlert('Success to update data!', 'green', 'thumb_up')
    }
  }
}
