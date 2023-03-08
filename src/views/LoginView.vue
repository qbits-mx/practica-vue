<template>
    <div>
        <h1>Login View XYZ</h1>
        <h2 @mouseover="cambia">Gustavo</h2>
        <button class="btn btn-danger" @click="carga" >Hola</button>
        
        <h2>{{ mensaje3 }}</h2>

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

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://linuxhint.com/wp-content/uploads/2018/03/Skyline-1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://linuxhint.com/wp-content/uploads/2018/03/Earth-Horizon-1.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://linuxhint.com/wp-content/uploads/2018/03/roads-untraveled.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


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
        },
        cambia: function() {
            this.mensaje3 = 'hola mundo'
        }
    } // aqui concluyen los métodos
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