<template>
  <div>
    <v-toolbar class="blue" dark dense >
        <v-toolbar-title s>
          <v-icon>mdi-note-multiple-outline</v-icon>
        </v-toolbar-title>

        <v-tabs background-color="blue">
          <v-spacer></v-spacer>
          <v-tab to="/productos">Todos</v-tab>
          <v-tab to="/computadoras">Computers</v-tab>
          <v-tab to="/telefonos">Phones</v-tab>
          <v-tab to="/accesorios">Accesories</v-tab>
          <v-spacer></v-spacer>
          <v-btn icon @click="cerrarSesion">
          <v-icon>mdi-logout</v-icon>
        </v-btn>

        </v-tabs>
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

<style scoped>
  div{
    position: sticky;
    top: 0;
    z-index: 100;
  }
</style>