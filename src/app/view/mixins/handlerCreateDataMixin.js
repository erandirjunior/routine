import handlerActionMixin from './handlerActionMixin'
import handlerValidationFormMixin from './handlerValidationFormMixin'
import handlerAlertMixin from './handlerAlertMixin'

export default {
  data () {
    return {
      controllerCreate: '',
      failMessageCreate: '',
      successMessageCreate: ''
    }
  },
  mixins: [
    handlerActionMixin,
    handlerValidationFormMixin,
    handlerAlertMixin
  ],
  methods: {
    create () {
      this.beforeCreate()

      if (!this.enableValidationIfHasPropertyWasDefined('form')) {
        this.controllerCreate.create(this.form)
          .then(() => this.afterSuccessCreate())
          .catch((error) => this.afterFailCreate(error))
      }
    },
    beforeCreate () {},
    afterFailCreate (error) {
      if (error) {
        return this.showAlert(error, 'red', 'thumb_down')
      }

      return this.showAlert(this.failMessageCreate, 'red', 'thumb_down')
    },
    afterSuccessCreate () {
      if (this.successMessageCreate) {
        return this.showAlert(this.successMessageCreate, 'green', 'thumb_up')
      }

      this.showAlert('Success to save data!', 'green', 'thumb_up')
    }
  }
}
