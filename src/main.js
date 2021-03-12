import Vue from 'vue'
import App from './App.vue'
import Fbutton from './components/F_button.vue'

Vue.config.productionTip = false

Vue.component(Fbutton.name, Fbutton)

new Vue({
  render: h => h(App)
}).$mount('#app')
