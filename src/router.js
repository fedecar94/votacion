import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resultado from './views/Resultado.vue'
import Graficas from './views/Graficas.vue'

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
    },
    {
      path: '/Graficas',
      name: 'graficas',
      component: Graficas
    }
  ]
})
