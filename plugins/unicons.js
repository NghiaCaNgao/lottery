import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniArrowRight, uniFacebookF, uniLinkedin, uniYoutube } from 'vue-unicons/dist/icons'

Unicon.add([
  uniFacebookF,
  uniArrowRight,
  uniYoutube,
  uniLinkedin
])
Vue.use(Unicon);
