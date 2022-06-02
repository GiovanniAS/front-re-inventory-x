<template>
<div>
    <Header />
    <v-container class="container">
        <h1>Productos</h1>
        <br>
        <!-- <v-btn class="green white--text" style="width:100%; margin: 5px;" to="/post">Agregar producto</v-btn> -->
        <v-btn class="blue white--text mx-2 btn-add" fab mid to="/post">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br><br>
        <v-card>
            <v-simple-table >
                <thead>
                    <tr class="light-blue darken-2">
                        <th class="white--text" scope="col">#</th>
                        <th class="white--text" scope="col">Producto</th>
                        <th class="white--text" scope="col">Descripción</th>
                        <th class="white--text" scope="col">Precio</th>
                        <th class="white--text" scope="col">Categoría</th>
                        <th class="white--text" scope="col">Cantidad</th>
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
                        <td>{{ producto.cantidad }}</td>
                        <td>
                            <v-btn 
                                class="yellow dark--text mx-2 btnn" 
                                fab
                                small
                                @click="actualizarProducto(producto._id)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            
                            <!--
                            <v-btn 
                                class="red white--text mx-2 btnn btn-delete"
                                fab 
                                small
                                @click="eliminarProducto(producto._id)">
                                <v-icon class="delete__1">mdi-delete</v-icon>
                            </v-btn>
                            -->
                            
                            <v-btn
                            dark
                            class="red white--text mx-2 btnn btn-delete"
                            fab 
                            @click.stop="dialog = true"
                            @click="guardarIdProducto(producto._id)"
                            small>
                                <v-icon class="delete__1">mdi-delete</v-icon>
                            
                            </v-btn>

                            <v-dialog
                            v-model="dialog"
                            max-width="290"
                            :retain-focus="false"
                            >
                            <v-card>
                                <v-card-title class="text-h5">
                                ¿Seguro que quiere eliminar este elemento?
                                </v-card-title>

                                <v-card-text>
                                No habrá vuelta atrás.
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Cancelar
                                </v-btn>

                                <v-btn
                                    color="red darken-1"
                                    text
                                    @click="dialog=false"
                                    @click.stop="eliminarProducto()"
                                >
                                    Eliminar
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
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
            productos: [],
            dialog: false
        }
    },
    methods: {
        guardarIdProducto(id){
        //console.log(id);
        localStorage.setItem(`idProducto`,id);
        },
        mostrarProductos(){
            axios.get('apiProducto/productocom')
                .then( (res) => {
                    this.productos = res.data
                    //console.log(this.notas)
                })
                .catch( (e) => {
                    //console.log('error: '+ e)
                })
        },
        eliminarProducto(){
            const id=localStorage.getItem('idProducto')
            axios.delete(`apiProducto/producto/${id}`)
                .then( res => {
                     let index = this.productos.findIndex(item => item._id === res.data._id)
                     this.productos.splice(index,1)
                })
                .catch( e => {
                    //console.log('error: ' + e)
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