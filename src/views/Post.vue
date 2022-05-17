<template>
    <v-conatainer>
        <v-form class="formPost" @submit.prevent="agregarProducto(producto)" id="post-form">
            <h3 class=""> Añadir producto al inventario</h3>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre">
                <!-- <input class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre"> -->
            </v-text-field>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa la descripcion" v-model="producto.descripcion">
                
            </v-text-field>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa el precio" v-model="producto.precio">
                
            </v-text-field>

            <v-select v-model="producto.categoria" :items="options" class="elementsi"></v-select>
                <!-- <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="producto.precio"> -->
            <v-btn class="green white--text" style="width:100%; margin: 5px;" type="submit" form="post-form"> Añadir </v-btn>
            <v-btn 
            class="orange white--text" style="width:100%; margin: 5px;"
            to="/productos">
            Cancelar
            </v-btn>
        </v-form>
    </v-conatainer> 
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            producto: {},
            productos: [],
            options: [
                { value: 'computers', text: 'computers' },
                { value: 'phones', text: 'phones' },
                { value: 'accesories', text: 'accesories' }
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
                    console.log('error: '+e)
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