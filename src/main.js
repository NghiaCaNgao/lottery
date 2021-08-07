// Core
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// UI
import VueApexCharts from 'vue-apexcharts'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import Toast from "vue-toastification";
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'
import "vue-toastification/dist/index.css";

import {
  uniCircle,
  uniFeedback,
  uniPlus,
  uniQrcodeScan,
  uniShare
} from 'vue-unicons/dist/icons'


Unicon.add([
  uniShare,
  uniQrcodeScan,
  uniFeedback,
  uniCircle,
  uniPlus
])

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: true
});
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
