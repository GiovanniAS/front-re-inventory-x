<template>
    <div class="container">
        <form class="formPost" @submit.prevent="editarProducto(productoEditar)">
            <h3 class=""> Editar Producto</h3>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="productoEditar.nombre">
                <!-- <input class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre"> -->
            </v-text-field>

            <v-text-field class="elementsi" type="text" placeholder="Ingresa la descripcion" v-model="productoEditar.descripcion">
                
            </v-text-field>

            <v-text-field class="elementsi" type="number" placeholder="Ingresa el precio" v-model="productoEditar.precio">
                
            </v-text-field>

            <v-text-field class="elementsi" type="number" placeholder="Ingresa la cantidad" v-model="productoEditar.cantidad">
                
            </v-text-field>

            <v-select v-model="productoEditar.categoria" :items="options" class="elementsi"></v-select>
            <div style="display:flex;">
              <v-btn 
              class="elementsi green white--tex btnn" 
              type="submit" style="width:50%;">
                  Actualizar
              </v-btn>
              <v-btn 
              class="elementsi orange white--tex btnn"
              to="/productos" style="width:50%;">
              Cancelar
              </v-btn>
            </div>
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
                { value: 'computers', text: 'Computadoras' },
                { value: 'phones', text: 'Telefonos' },
                { value: 'accesories', text: 'Accesorios' }
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
            //console.log(this.productoEditar)
          })
          .catch( e => {
             //console.log('error ' + e)
          })
      },
      editarProducto(item){
        axios.put(`apiProducto/producto/${item._id}`,item)
          .then(res =>{
            this.productoEditar = {}
            this.$router.push({
                name: "Productos"
            });
            //console.log(res)
          })
          .catch( e => {
             //console.log('error ' + e)
          })
      }
    }
  }

</script>

<style scoped>
.formPost{
    width: 70%;
    padding: 3%;
    margin: auto;

}
.elements{
    width: 100%;
    margin: 10px;
}
.elementsi{
    width: 100%;
    margin: 5px;
    color: white;
}
.btnn:hover{
    box-shadow: 5px 5px 5px #555 !important;
}
</style>