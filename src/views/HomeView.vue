<template>
<div>
  <Header />
    <v-app>
      <v-card class="mx-10 my-10">
        <v-app-bar dark color="blue">
          <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
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
                <v-btn dark color="blue" type="submit">Ingresar</v-btn>
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
