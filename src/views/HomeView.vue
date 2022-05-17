<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="login(usuario)">
      <input type="text" placeholder="Ingresa email" v-model="usuario.email">
      <input type="password" placeholder="Ingresa contraseña" v-model="usuario.password">
      <button type="submit">Ingresar</button>
    </form>
</div>
  
</template>

<script>

  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        usuario:{
          email: "giovannidas@correos.com",
          password: "123456"
        }
      }
    },
  methods: {
    ...mapActions(['login']),
  },

  }
</script>
