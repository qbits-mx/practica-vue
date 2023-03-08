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



<!-- Carousel wrapper -->
<div id="carouselExampleIndicators" class="carousel slide carousel-fade ancho" data-bs-ride="carousel">
  <!-- Slides -->
  <div class="carousel-inner mb-5">
    <div class="carousel-item active">
      <img :src=img1 class="d-block w-100 alto" alt="..." />
    </div>
    <div class="carousel-item">
      <img :src=img2 class="d-block w-100 alto" alt="..." />
    </div>
    <div class="carousel-item">
      <img :src=img3 class="d-block w-100 alto" alt="..." />
    </div>
  </div>
  <!-- Slides -->

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <!-- Controls -->

  <!-- Thumbnails -->
  <div class="carousel-indicators" style="margin-bottom: -20px;">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1" style="width: 100px;">
      <img class="d-block w-100 img-fluid" :src=img1 />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
      aria-label="Slide 2" style="width: 100px;">
      <img class="d-block w-100 img-fluid" :src=img2  />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
      aria-label="Slide 3" style="width: 100px;">
      <img class="d-block w-100 img-fluid" :src=img3 />
    </button>
  </div>
</div>
<!-- Carousel wrapper -->




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
            img1: 'https://linuxhint.com/wp-content/uploads/2018/03/Skyline-1.jpg',
            img2: 'https://linuxhint.com/wp-content/uploads/2018/03/Earth-Horizon-1.jpg',
            img3: 'https://linuxhint.com/wp-content/uploads/2018/03/roads-untraveled.jpg',
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
.ancho {
    width: 400px;
}
.alto {
    height: 200px;
}
</style>