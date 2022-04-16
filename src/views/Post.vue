<template>
    <div class="container">
        <form class="formPost" @submit.prevent="agregarProducto(producto)">
            <h3 class=""> Añadir producto al inventario</h3>
            <div class="">
                <input class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre">
            </div>
            <div class="">
                <input class="elementsi" type="text" placeholder="Ingresa la descripcion" v-model="producto.descripcion">
            </div>
            <div class="" placeholder="Ingresa el la categoria">
                <input class="elementsi" type="text" placeholder="Ingresa el precio" v-model="producto.precio">
            </div>
            <div class="">
                <b-form-select v-model="producto.categoria" :options="options" class="elementsi"></b-form-select>
                <!-- <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="producto.precio"> -->
            </div>
            <b-button class="elements" type="submit">
                Añadir
            </b-button>
            <router-link 
            class="elements"
            to="/productos">
            Cancelar
            </router-link>
        </form>
    </div> 
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