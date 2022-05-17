<template>
    <div class="container">
        <form class="formPost" @submit.prevent="editarProducto(productoEditar)">
            <h3 class=""> Editar Producto</h3>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="productoEditar.nombre">
                <!-- <input class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre"> -->
            </v-text-field>

            <v-text-field class="elementsi" type="text" placeholder="Ingresa la descripcion" v-model="productoEditar.descripcion">
                
            </v-text-field>

            <v-text-field class="elementsi" type="text" placeholder="Ingresa el precio" v-model="productoEditar.precio">
                
            </v-text-field>

            <v-select v-model="productoEditar.categoria" :items="options" class="elementsi"></v-select>
            
            <v-btn 
            class="elementsi" 
            type="submit">
                Actualizar
            </v-btn>
            <v-btn 
            class="elements"
            to="/productos">
            Cancelar
            </v-btn>
        </form>
    </div> 
</template>

<script>

  import axios from 'axios'

  export default{
    data() {
      return{
        productoEditar: {},
        options: [
                { value: 'computers', text: 'computers' },
                { value: 'phones', text: 'phones' },
                { value: 'accesories', text: 'accesories' }
            ]
      }
    },
    mounted(){
      this.loadProducto()
    },
    methods:{
      loadProducto(id){
        //alert(this.$route.params.id)
        let idProducto = this.$route.params.id
        axios.get(`apiProducto/producto/${idProducto}`)
          .then ( res => {
            this.productoEditar = res.data
            console.log(this.productoEditar)
          })
          .catch( e => {
             console.log('error ' + e)
          })
      },
      editarProducto(item){
        axios.put(`apiProducto/producto/${item._id}`,item)
          .then(res =>{
            this.productoEditar = {}
            this.$router.push({
                name: "Productos"
            });
            console.log(res)
          })
          .catch( e => {
             console.log('error ' + e)
          })
      }
    }
  }

</script>

<style scoped>
.formPost{
    width: 100%;
    padding: 3%;

}
.elements{
    width: 100%;
    margin: 10px;
}
.elementsi{
    width: 100%;
    margin: 10px;
}
</style>