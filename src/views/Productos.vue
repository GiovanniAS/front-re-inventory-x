<template>
<div>
    <Header />
    <v-container class="container">
        <h1>Productos</h1>
        <br>
        <v-btn class="green white--text" style="width:100%; margin: 5px;" to="/post">Agregar producto</v-btn>
        <br><br>
        <v-card>
            <v-simple-table >
                <thead>
                    <tr class="light-blue darken-2">
                        <th class="white--text" scope="col">#</th>
                        <th class="white--text" scope="col">Producto</th>
                        <th class="white--text" scope="col">Descripcion</th>
                        <th class="white--text" scope="col">Precio</th>
                        <th class="white--text" scope="col">Categoria</th>
                        <th class="white--text" scope="col">Acciones</th>
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
                            <v-btn 
                                class="yellow dark--text mx-2" 
                                fab
                                small
                                @click="actualizarProducto(producto._id)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            
                            <v-btn 
                                class="red white--text mx-2"
                                fab 
                                small
                                @click="eliminarProducto(producto._id)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
    </v-container>
</div> 
</template>

<script>
import Header from '@/components/Header'
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
    components: {
      Header,
    },
}
</script>