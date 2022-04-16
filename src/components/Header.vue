<template>
<div>
<v-toolbar class="blue" dark dense >
      <v-toolbar-title class="white--text">reInventory</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/productos">
        <v-icon>mdi-ballot-outline</v-icon>
      </v-btn>
    </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

