<template>
    <div>
        <h1>Login View XYZ</h1>
        <h2 @click="carga">Gustavo</h2>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Otra</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="experimento in mensaje4" v-bind:key="experimento.id">
                <td>{{ experimento.id }}</td>
                <td>{{ experimento.nombre }}</td>
                <td>{{ experimento.color }}</td>
                <td>{{ experimento.precio }}</td>
                <td>{{ experimento.agotado }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function () {
        return {
            mensaje: 'Hola mundo',
            mensaje2: 'Hola mundo 2',
            mensaje3: 'Hola mundo 3',
            mensaje4: 'Hola mundo 4',
        }
    },
    methods: {
        carga: function() {
            axios.get('http://localhost:8080/pro/muebles', {
              }).then(response => {
                console.log(response.data)
                  this.mensaje4 = response.data; 
              })
        }
    }
}
</script>

<style scoped>
h2 {
    color:red;
}
body {
  background-color: yellow;
}
</style>