<template>
    <v-container>
        <v-form class="formPost" @submit.prevent="agregarUsuario(usuario)" id="post-form">
            <h3 class=""> Registrar un usuario nuevo </h3>
            <v-text-field class="elementsi" type="text" placeholder="Ingresa el nombre" v-model="usuario.name">
                <!-- <input class="elementsi" type="text" placeholder="Ingresa el modelo" v-model="producto.nombre"> -->
            </v-text-field>
            <v-text-field class="elementsi" type="email" placeholder="Ingresa el correo" v-model="usuario.email">
                
            </v-text-field>
            <v-text-field class="elementsi" type="password" placeholder="Ingresa la contraseña" v-model="usuario.password">
                
            </v-text-field>

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
            usuario: {},
            usuarios: [],
        }
    },
    methods:{
        agregarUsuario (item) {
            axios.post('/api/user/register', item)
                .then(res =>{
                    this.usuarios.unshift(res.data)
                    window.location.href = '/productos'
                })
                .catch( e =>{
                    //console.log('error: '+e)
                    //console.log(item)
                    alert('Por favor ingrese todos los datos correctamente')
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