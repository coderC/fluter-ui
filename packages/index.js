import Fbutton from './F_button.vue'
import Fdialog from './F_dialog.vue'
import Finput from './F_input.vue'
import Fswitch from './F_switch.vue'
import Fradio from './F_radio.vue'
import Fradiogroup from './F_radio-group.vue'
import Fcheckbox from './F_checkbox.vue'
import Fcheckgroup from './F_checkbox-group.vue'
import Fform from './F_form.vue'
import Fformitem from './F_form-item.vue'
import './font_2418434_8fv3xfqaylv/iconfont.css'

const components = [
  Fbutton,
  Fdialog,
  Finput,
  Fswitch,
  Fradiogroup,
  Fradio,
  Fcheckbox,
  Fcheckgroup,
  Fform,
  Fformitem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
