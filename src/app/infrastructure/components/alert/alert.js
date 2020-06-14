import { Notify } from 'quasar'

export default function alert (message, color, icon) {
  Notify.create({
    color: color,
    position: 'top',
    message: message,
    timeout: 3000,
    icon: icon
  })
}
