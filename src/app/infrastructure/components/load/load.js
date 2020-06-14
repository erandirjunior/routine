import { Loading } from 'quasar'

const openLoad = (message = 'Wait...', spinnerSize = 250, spinnerColor = 'white') => {
  Loading.show({
    message: message,
    spinnerSize: spinnerSize,
    spinnerColor: spinnerColor
  })
}

const closeLoad = () => {
  Loading.hide()
}

export { openLoad, closeLoad }
