import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/accueil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vente',
    name: 'Vente',
    // route level code-splitting
    // this generates a separate chunk (vente.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vente" */ '../views/vente.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
