import handlerActionMixin from 'src/app/infrastructure/view/mixins/handlerActionMixin'
import handlerValidationFormMixin from 'src/app/infrastructure/view/mixins/handlerValidationFormMixin'
import handlerAlertMixin from 'src/app/infrastructure/view/mixins/handlerAlertMixin'

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
        this.showAlert(error, 'red', 'thumb_down')
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
