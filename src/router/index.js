import Vue from 'vue'
import VueRouter from 'vue-router'
import Play from '../views/Play.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Play',
    component: Play
  }, {
    path: '/create',
    name: "Create",
    component: () => import("../views/Create.vue")
  },
  {
    path: '/user',
    name: "User",
    component: () => import("../views/User.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
