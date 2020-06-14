import alert from 'src/app/infrastructure/components/alert/Alert'
import actionMixin from 'src/app/infrastructure/view/mixins/handlerActionMixin'

export default {
  mixins: [
    actionMixin
  ],
  methods: {
    showAlert (message, color, icon) {
      alert(message, color, icon)
    }
  }
}
