<template>
<div>
  <Header />
    <v-app>
      <v-card class="mx-auto my-auto" width="70%">
        <v-app-bar dark color="blue">
          <v-toolbar-title class="label">Iniciar Sesión</v-toolbar-title>
        </v-app-bar>
        <v-card-text>
          <form @submit.prevent="login(usuario)" class="v-form">
            <v-row>
              <v-col cols="12">
                <v-text-field type="text" label="Email" v-model="usuario.email" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field type="password" label="Contraseña" v-model="usuario.password" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                <v-btn dark color="blue" type="submit" class="btn-login">Ingresar</v-btn>
              </v-col>
            </v-row>
          </form>
        </v-card-text>
      </v-card>
    </v-app>
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

<style scoped>
  .btn-login:hover{
    background-color: rgb(30, 172, 80) !important;
    box-shadow: 5px 5px 5px #555 !important;}
  .label{
    position: relative;
    display: inline;
    margin: auto;
    animation-name: desplazar;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
@keyframes desplazar{
  0%{
    transform: translateX(-100%);
    }
  100%{
    transform: translateX(100%);
  }
}
</style>