import { Loading } from 'quasar'

export default class Load {
  open (message = 'Wait...', spinnerSize = 250, spinnerColor = 'white') {
    Loading.show({
      message: message,
      spinnerSize: spinnerSize,
      spinnerColor: spinnerColor
    })
  }

  close () {
    Loading.hide()
  }
}
