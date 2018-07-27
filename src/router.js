import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Bancas',
      name: 'resultado',
      component: () => import(/* webpackChunkName: "Resultado" */ './views/Resultado.vue')
    },
    {
      path: '/Graficas',
      name: 'graficas',
      component: () => import(/* webpackChunkName: "Graficas" */ './views/Graficas.vue')
    }
  ]
})
