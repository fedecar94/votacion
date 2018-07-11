import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    escano: 0,
    array: [],
    blancos: 0,
    nulos: 0,
    habilitados: 0
  },
  mutations: {
    'SET_ESCANO': function (state, newValue) {
      state.escano = newValue
    },
    'SET_BLANCOS': function (state, newValue) {
      state.blancos = newValue
    },
    'SET_NULOS': function (state, newValue) {
      state.nulos = newValue
    },
    'SET_HABILITADOS': function (state, newValue) {
      state.habilitados = newValue
    }
  },
  actions: {
    setescano (store, newValue) {
      store.commit('SET_ESCANO', newValue)
    },
    setblancos (store, newValue) {
      store.commit('SET_BLANCOS', newValue)
    },
    setnulos (store, newValue) {
      store.commit('SET_NULOS', newValue)
    },
    sethabilitados (store, newValue) {
      store.commit('SET_HABILITADOS', newValue)
    }
  }
})
