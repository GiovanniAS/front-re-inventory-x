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
    <v-tabs
      background-color="blue"
      center-active
      dark
    >
    <v-spacer></v-spacer>
      <v-tab to="/productos">Todos</v-tab>
      <v-tab to="/computadoras">Computadoras</v-tab>
      <v-tab to="/telefonos">Telefonos</v-tab>
      <v-tab to="/accesorios">Accesorios</v-tab>
    <v-spacer></v-spacer>
    </v-tabs>
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

