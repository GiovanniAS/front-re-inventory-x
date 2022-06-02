<template>
    <v-container>
        <v-form class="formPost" @submit.prevent="agregarProducto(producto)" id="post-form">
            <h3 class=""> Añadir producto al inventario</h3>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre">
                <!-- <input class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre"> -->
            </v-text-field>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa la descripcion" v-model="producto.descripcion">
                
            </v-text-field>
            <v-text-field class="elementsi" type="number" placeholder="Ingresa el precio" v-model="producto.precio">
                
            </v-text-field>

            <v-text-field class="elementsi" type="number" placeholder="Ingresa la cantidad" v-model="producto.cantidad">
                
            </v-text-field>

            <v-select v-model="producto.categoria" :items="options" class="elementsi" placeholder="Categoría"></v-select>
                <!-- <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="producto.precio"> -->
            <div style="display:flex;">
                <v-btn class="green white--text btnn" style="width:50%; margin: 5px;" type="submit" form="post-form"> Añadir </v-btn>
                <v-btn 
                class="orange white--text btnn" style="width:50%; margin: 5px;"
                to="/productos">
                Cancelar
                </v-btn>

            </div>
        </v-form>
    </v-container> 
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            producto: {},
            productos: [],
            options: [
                { value: 'computers', text: 'Computadoras' },
                { value: 'phones', text: 'Telefonos' },
                { value: 'accesories', text: 'Accesorios' }
            ]
        }
    },
    methods:{
        agregarProducto (item) {
            axios.post('apiProducto/nuevo-producto', item)
                .then(res =>{
                    this.productos.unshift(res.data)
                    window.location.href = '/productos'
                })
                .catch( e =>{
                    //console.log('error: '+e)
                })
        },
        regresar(){
            window.location.href = '/productos'
        }
    }
}
</script>

<style scoped>
.formPost{
    max-width: 70%;
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
}
.btnn:hover{
    box-shadow: 5px 5px 5px #555 !important;
}
</style>