<template>
    <div class="container">
        <h1>Productos</h1>
        <br>
        <router-link 
            class="btn btn-success"
            style="width:100%; margin: 5px;"
            to="/post">
            Agregar nota
        </router-link>
        <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto, index) in productos" :key="index">
                    <th scope="row">{{ producto._id }}</th>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.descripcion }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>{{ producto.categoria }}</td>
                    <td>
                        <b-button 
                            class="btn-warning btn-sm mx-2" 
                            @click="actualizarProducto(producto._id)">
                            Editar
                        </b-button>
                        |
                        <b-button 
                            class="btn-danger btn-sm mx-2" 
                            @click="eliminarProducto(producto._id)">
                            Borrar
                        </b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios  from 'axios'
export default {
    
    data () {
        return {
            productos: []
        }
    },
    methods: {
        mostrarProductos(){
            axios.get('apiProducto/producto')
                .then( (res) => {
                    this.productos = res.data
                    //console.log(this.notas)
                })
                .catch( (e) => {
                    console.log('error: '+ e)
                })
        },
        eliminarProducto(id){
            axios.delete(`apiProducto/producto/${id}`)
                .then( res => {
                     let index = this.productos.findIndex(item => item._id === res.data._id)
                     this.productos.splice(index,1)
                })
                .catch( e => {
                    console.log('error: ' + e)
                })
        },
        actualizarProducto(id){
            //console.log(id)
            this.$router.push({
                name: "Put",
                params:{
                    id,
                }
            });
        }
    },
    created() {
        this.mostrarProductos()
    },
}
</script>