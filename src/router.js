import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resultado from './views/Resultado.vue'

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
      component: Resultado
    }
  ]
})
