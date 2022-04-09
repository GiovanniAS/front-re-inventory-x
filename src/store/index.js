import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idProducto: null
  },
  getters: {
  },
  mutations: {
    setIdNota(state, idProducto){
      console.log('New Id ',idProducto)
      state.idProducto = idProducto //Actualiza el store
      console.log('mutado',)
    }
  },
  actions: {
  },
  modules: {
  }
})
