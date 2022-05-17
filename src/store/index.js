import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idProducto: null,
    token: null
  },
  getters: {
  },
  mutations: {
    setIdNota(state, idProducto){
      console.log('New Id ',idProducto)
      state.idProducto = idProducto //Actualiza el store
      console.log('mutado',)
    },
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({ commit }, usuario){
      try {
        const res = await fetch('https://login-app-back-giovs.herokuapp.com/api/user/login',{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(usuario),
          status:JSON.stringify()
        })
        console.log(res)
        const usuarioDB = await res.json()
        commit('setToken', usuarioDB.data.token)
        localStorage.setItem('token2', usuarioDB.data.token)
        console.log('validando token: ', usuarioDB.data.token)
        try {
          const res = await fetch('https://login-app-back-giovs.herokuapp.com/api/dashboard', {
            headers:{
              'Content-Type': 'appliication/json',
            'auth-token': usuarioDB.data.token
            }
            
          })
          const resBD = await res.json()
          console.log(resBD)
          if(resBD.error == null){
            window.location.href = '/productos'
          }
        } catch (error) {
          console.log(error)
        }
        
      } catch (error) {
        console.log('error: ' + error)
      }
    },
    obtenerToken({ commit }){
      if(localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      }else{
        commit('setToken', null)
      }
    },
    cerrarSesion({ commit }){
      commit('setToken', null)
      localStorage.removeItem('token2')
      window.location.href = '/'
    }
  },
  modules: {
  }
})
