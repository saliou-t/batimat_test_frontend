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
    component: () => import(/* webpackChunkName: "vente" */ '../views/vente.vue')
  },

  {
    path: '/paiement',
    name: 'Paiement',
    
    component: () => import(/* webpackChunkName: "vente" */ '../views/paiement.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
