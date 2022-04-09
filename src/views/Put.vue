<template>
    <div class="container">
        <form class="formPost" @submit.prevent="editarProducto(productoEditar)">
            <h3 class="text-center"> Editar Producto</h3>
            <div class="input-group">
                <input type="text" placeholder="Ingresa el modelo" class="form-control-my-2 elementsi" v-model="productoEditar.nombre">
            </div>
            <div class="input-group">
                <input type="text" placeholder="Ingresa la descripcion" class="form-control-my-2 elementsi" v-model="productoEditar.descripcion">
            </div>
            <div class="input-group">
                <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="productoEditar.precio">
            </div>
            <div class="input-group" placeholder="Ingresa el la categoria">
                <b-form-select v-model="productoEditar.categoria" :options="options"></b-form-select>
                <!-- <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="producto.precio"> -->
            </div>
            <b-button class="btn btn-block btn-success elements" type="submit">
                Actualizar
            </b-button>
            <router-link 
            class="btn btn-warning elements"
            to="/productos">
            Cancelar
            </router-link>
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