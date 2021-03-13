import Vue from 'vue'
import App from './App.vue'
import Fbutton from './components/F_button.vue'
import Fdialog from './components/F_dialog.vue'

Vue.config.productionTip = false

Vue.component(Fbutton.name, Fbutton)
Vue.component(Fdialog.name, Fdialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
