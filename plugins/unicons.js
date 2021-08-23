import Vue from "vue";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniArrowRight,
  uniChat,
  uniFacebookF,
  uniHistoryAlt,
  uniLinkedin,
  uniRuler,
  uniShare,
  uniUsersAlt,
  uniYoutube
} from "vue-unicons/dist/icons";

Unicon.add([
  uniFacebookF,
  uniArrowRight,
  uniYoutube,
  uniLinkedin,
  uniShare,
  uniUsersAlt,
  uniHistoryAlt,
  uniChat,
  uniRuler
]);
Vue.use(Unicon);
