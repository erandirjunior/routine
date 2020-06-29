import alert from 'src/app/infrastructure/components/alert/alert'

export default {
  methods: {
    showAlert (message, color, icon) {
      alert(message, color, icon)
    }
  }
}
