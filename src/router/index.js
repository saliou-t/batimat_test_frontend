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
  },

  {
    path: '/login',
    name: 'login',
    component: () =>
        import ('./../views/authentication/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
