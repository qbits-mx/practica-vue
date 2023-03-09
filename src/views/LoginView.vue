<template>
 

  <div>

    <ul class="menu">
  <li>
    <a href="#0">
      <span>Mercado Libre </span>
      <span>
        <i class="fas fa-address-card" aria-hidden="true"></i>
      </span>
    </a>
  </li>
  <li>
    <a href="#0">
      <span>🔍 Busqueda</span>
      <span>
        <i class="fas fa-tasks" aria-hidden="true"></i>    
      </span>
    </a>
  </li>
  <li>
    <a href="#0">
      <span>Clients</span>
      <span>
        <i class="fas fa-users" aria-hidden="true"></i>      
      </span>
    </a>
  </li>
  <li>
    <a href="#0">
      <span>Contact</span>
      <span>
        <i class="fas fa-envelope-open-text" aria-hidden="true"></i>    
      </span>
    </a>
  </li>
</ul>



<div class="container text-center">
<div class="row">
  <div class="col">
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
  <div class="col">

      <h1>{{ Echo }} </h1>
      <h2 @mouseover="cambia">$ 530</h2>
      <button class="btn btn-danger" @click="carga" >Informacion acerca de</button>
      
      <h2>{{ mensaje3 }}</h2>
      <h1> Lo que tienes que saber de este producto</h1>
      <ol>
    <br>
    <br>
    <br>
    <br>
    <br>
        <li> ✯Con reconocimiento de voz. </li>
  
        <li> ✯Función de control inteligente de dispositivos del hogar.</li>
    
        <li> ✯Opción de sistema de audio multi-room.</li> 
    
        <li> ✯Conexión wifi y bluetooth.</li>
    
        <li> ✯Recibe y realiza llamadas.</li>
    
        <li> ✯Funciona en español y en inglés.</li>
    
        <li>✯Compatible con: Android 6.0, iOS 11.0, Fire OS 5.3.3. </li>
    
        <li> ✯Su asistente virtual te ayudará a realizar diversas tareas como reproducir música, contestar llamadas y conocer el pronóstico del tiempo. </li>
      </ol>       




  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
</div>
<br><br><br><br><br>
    <h2>{{ sst }}</h2>
    <br>
    <br>
    <button type="button" class="btn btn-success">Comprar ahora</button>
    <br>
    <br>
    <button type="button" class="btn btn-info">mandar al carrito</button>
    <br>
    <br>
    <button type="button" class="btn btn-link">Informacion del vendedor</button>
    <br>
    <br>
    <h2>{{ envi}}</h2>


    <br>
    <br>
    <br>
    <br>
    <br>

    <ul v-for="(carac,index) in caracteristicas" v-bind:key="index">
           <li>{{ carac }}</li>
    </ul>
    </div>
</div>
</div>
<br>

</div>
<br>
<br>


<div class="mensaje">
    <p>Amazon Echo Dot 4th Gen</p>
    <p class="oculta">$467</p>
    <p class="oculta">Negro</p>
    <p class="oculta">seminuava</p>
    <p class="oculta">En stock</p>
</div>
<div class="mensaje">
    <p>Bocina alexa 4th Gen</p>
    <p class="oculta">$267</p>
    <p class="oculta">Azul</p>
    <p class="oculta">nueva</p>
    <p class="oculta">En stock</p>
</div>
<div class="mensaje">
    <p>Amazon Echo Dot 6th Gen</p>
    <p class="oculta">$1567</p>
    <p class="oculta">Negro</p>
    <p class="oculta">seminueva</p>
    <p class="oculta">En stock</p>
</div><div class="mensaje">
    <p>Amazon Echo Dot 4th Gen</p>
    <p class="oculta">$567</p>
    <p class="oculta">Gris</p>
    <p class="oculta">nueva</p>
    <p class="oculta">En stock</p>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<footer class="page-footer">
  <small>Made by Gustavo Rangel for ultrasist
  </small>
</footer>
  </div>
</template>

<script>
import axios from 'axios'
//const inicio= 'https://linuxhint.com/wp-content/uploads/2018/03/'
// localhost
// 127.0.0.1
// 10.0.2.15
// constantes 
const inicio='http://10.0.2.15/'
const envio= '🚚Envíos a todo el pais'


export default {
  data: function () {
      return {
          mensaje: 'Hola mundo',
          mensaje2: 'Hola mundo 2',
          mensaje3: 'en 12x $58 IVA incluido',
          mensaje4: 'Lo que tienes que saber de este producto',
          Echo: 'Echo Dot 3rd Gen con asistente virtual Alexa carbón 110V/240V',
   
          img1: inicio + '61aiJcyfhyL._AC_SL1000_.jpg',
          img2: inicio + '61kCxlxYDfL._AC_SL1000_.jpg',
          img3: inicio + '61Rr8uxmREL._AC_SY355_.jpg',
          img4: inicio + 'Earth-Horizon-1.jpg',
          envi: envio,

          caracteristicas:["Devolución gratis. Tienes 30 días desde que lo recibes.",
          " Compra ProtegidaSe abrirá en una nueva ventana",
         "recibe el producto que esperabas o te devolvemos tu dinero.",
         "Mercado PuntosSe abrirá en una nueva ventana. Sumas 44 puntos"]




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
  } // aqui concluyen los métodos
}
</script>

<style scoped>
h2 {
  color:gray;
}
body {
background-color: yellow;
}
.ancho {
  width: 400px;
}
.alto {
  height: 500px;
}
.box2 .icon{
color: rgb(2, 1, 124); 
}
.box2 .background-hover{
background: linear-gradient(to bottom, black, blue);
top: -170px;
left: -250px;
}
:root {
  --body-bg-color: #1a1c1d;
  --text-color: #aaaebc;
  --hr-color: #26292a;
  --red: #e74c3c;
}

* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  margin: 30px 0;
  font: 22px sans-serif;
  background: var(--body-bg-color);
  color: var(--text-color);
}

hr {
  border-color: var(--hr-color);
  margin: 20px 0;
}

.menu {
  display: flex;
  justify-content: center;
}

.menu li {
  margin-right: 70px;
}

.menu a {
  position: relative;
  display: block;
  overflow: hidden;
}

.menu a span {
  transition: transform 0.2s ease-out;
}

.menu a span:first-child {
  display: inline-block;
  padding: 10px;
}

.menu a span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}

.menu i {
  font-size: 30px;
}

.menu a:hover span:first-child {
  transform: translateY(100%);
}

.menu a:hover span:last-child,
.menu[data-animation] a:hover span:last-child {
  transform: none;
}

.menu[data-animation="to-top"] a span:last-child {
  transform: translateY(100%);
}

.menu[data-animation="to-top"] a:hover span:first-child {
  transform: translateY(-100%);
}

.menu[data-animation="to-right"] a span:last-child {
  transform: translateX(-100%);
}

.menu[data-animation="to-right"] a:hover span:first-child {
  transform: translateX(100%);
}

.menu[data-animation="to-left"] a span:last-child {
  transform: translateX(100%);
}

.menu[data-animation="to-left"] a:hover span:first-child {
  transform: translateX(-100%);
}
.mensaje {
  background-color: grey;
  width: 100%;
  color: #2c2b2b;
  text-align: center;
  font-size: 2.5em;
  padding: 1%;
}

.oculta {
  display: none;
}

.mensaje:hover .oculta {
    display: block;
}
</style>