<template>
    <div class="container">
        <form class="formPost" @submit.prevent="agregarProducto(producto)">
            <h3 class="text-center"> Añadir producto al inventario</h3>
            <div class="input-group">
                <input type="text" placeholder="Ingresa el modelo" class="form-control-my-2 elementsi" v-model="producto.nombre">
            </div>
            <div class="input-group">
                <input type="text" placeholder="Ingresa la descripcion" class="form-control-my-2 elementsi" v-model="producto.descripcion">
            </div>
            <div class="input-group" placeholder="Ingresa el la categoria">
                <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="producto.precio">
            </div>
            <div class="input-group">
                <b-form-select v-model="producto.categoria" :options="options"></b-form-select>
                <!-- <input type="text" placeholder="Ingresa el precio" class="form-control-my-2 elementsi" v-model="producto.precio"> -->
            </div>
            <b-button class="btn btn-block btn-success elements" type="submit">
                Añadir
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