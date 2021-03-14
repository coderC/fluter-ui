import Vue from 'vue'
import App from './App.vue'
// import Fbutton from './components/F_button.vue'
// import Fdialog from './components/F_dialog.vue'
// import Finput from './components/F_input.vue'
// import Fswitch from './components/F_switch.vue'
// import Fradio from './components/F_radio.vue'
// import Fradiogroup from './components/F_radio-group.vue'
// import Fcheckbox from './components/F_checkbox.vue'
// import Fcheckgroup from './components/F_checkbox-group.vue'
// import Fform from './components/F_form.vue'
// import Fformitem from './components/F_form-item.vue'

// import './assets/font_2418434_8fv3xfqaylv/iconfont.css'
import fluteUI from '../packages'

Vue.config.productionTip = false
Vue.use(fluteUI)

// Vue.component(Fbutton.name, Fbutton)
// Vue.component(Fdialog.name, Fdialog)
// Vue.component(Finput.name, Finput)
// Vue.component(Fswitch.name, Fswitch)
// Vue.component(Fradio.name, Fradio)
// Vue.component(Fradiogroup.name, Fradiogroup)
// Vue.component(Fcheckbox.name, Fcheckbox)
// Vue.component(Fcheckgroup.name, Fcheckgroup)
// Vue.component(Fform.name, Fform)
// Vue.component(Fformitem.name, Fformitem)

new Vue({
  render: h => h(App)
}).$mount('#app')
