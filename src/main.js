import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue' */
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify/lib'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuetify)

axios.defaults.baseURL = 'http://localhost:3005/'

/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css' */

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})