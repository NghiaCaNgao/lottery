import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'

import {
  uniFeedback,
  uniQrcodeScan,
  uniShare
} from 'vue-unicons/dist/icons'

import store from './store'

Unicon.add([
  uniShare,
  uniQrcodeScan,
  uniFeedback
])

Vue.use(Unicon)
Vue.use(ElementUI, { locale });
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
