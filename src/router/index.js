import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productos from '../views/Productos.vue'
import Computadoras from '../views/Computadoras.vue'
import Telefonos from '../views/Telefonos.vue'
import Accesorios from '../views/Accesorios.vue'
import Post from '../views/Post.vue'
import Put from '../views/Put.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/computadoras',
    name: 'Computadoras',
    component: Computadoras
  },
  {
    path: '/telefonos',
    name: 'Telefonos',
    component: Telefonos
  },
  {
    path: '/accesorios',
    name: 'Accesorios',
    component: Accesorios
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/put/:id',
    name: 'Put',
    component: Put
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
