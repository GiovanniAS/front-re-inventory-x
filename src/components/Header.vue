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
          <v-btn icon to="/register">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
          <!--
          <v-btn icon @click="cerrarSesion">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
          -->
          <v-btn
            @click.stop="dialog = true"
            icon
            >
            <v-icon>mdi-logout</v-icon>                 
          </v-btn>
          <v-dialog
          v-model="dialog"
          max-width="290"
          :retain-focus="false"
          >
            <v-card
          class="dialog">
              <v-card-title class="text-h5">
              ¿Seguro que quiere cerrar sesión?
              </v-card-title>
              <v-card-actions>

                <v-btn
                  color="red darken-1"
                  text
                  @click="dialog = false"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog=false"
                  @click.stop="cerrarSesion"
                >
                  Cerrar sesión
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-tabs>
    </v-toolbar>
        
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data () {
        return {
            dialog: false
        }
    },
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

  .dialog{
    margin: auto;
    position: static !important;
  }
</style>