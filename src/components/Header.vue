<template>
<div>
<v-toolbar class="blue" dark dense >
      <v-toolbar-title class="white--text">reInventory</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon to="/productos">
        <v-icon>mdi-form-select</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="cerrarSesion">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions(['obtenerToken', 'cerrarSesion'])
  },
  created() {
    this.obtenerToken()
  },
}
</script>

