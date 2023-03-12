<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{{go}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">{{ feat }}</a>
      <a class="nav-item nav-link" href="#">{{ princ }}</a>
      <a class="nav-item nav-link " href="#">{{ dic }}</a>
      <a class="nav-item nav-link " href="#">{{ mer }}</a>
      <a class="nav-item nav-link " href="#">{{ mod }}</a>
      <a class="nav-item nav-link " href="#">{{ Ven }}</a>
      <a class="nav-item nav-link " href="#">{{ help }}</a>
    </div>
  </div>

</nav>
  
    <body>
      <div class="display-10 mt-3 body1 mx-auto">
        <p class="texts">Volver al listado: <span class="linksurl">| Electrónica, Audio y Video > Audio > Asistentes Virtuales </span></p>
      </div>
      <div class="container text-center">
<div class="row">
  <div class="col">
<!-- Carousel wrapper -->
<div id="carouselExampleIndicators" class="carousel slide carousel-fade ancho" data-bs-ride="carousel">
<!-- Slides -->
<div class="carousel-inner mb-5">
  <div class="carousel-item active">
    <img :src=inicio2+img1 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img2 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img3 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img4 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img5 class="d-block w-100 alto" alt="..." />
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
    <img class="d-block w-100 img-fluid" :src=inicio2+img1 />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
    aria-label="Slide 2" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img2  />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
    aria-label="Slide 3" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img3 />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
    aria-label="Slide 3" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img4 />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
    aria-label="Slide 3" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img5 />
  </button>
</div>
</div>
<!-- Carousel wrapper -->     

  </div>
          <div class="col texts1">
            <span class="oscuro">Nuevo |  +{{ totalVentas }}vendidos</span>
            <h5 class="my-2">{{ nombre }}</h5>
            <div>
              <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
              <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
              <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
              <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
              <i class="bi bi-star-half mx-1" style="color: cornflowerblue;"></i>
              <span class="linksurl"> ({{ estrellas }})</span>
            </div>
            <div class="my-2 d-flex align-items-center">
              <div class="my-auto">
                <p class="naranja p-1 my-auto">MÁS VENDIDO</p>
              </div>
              <span class="linksurl mx-3">{{ vendidas }} en Asistentes Virtuales</span>
            </div>
            <div>
              <h3 class="precios m-0">${{ precio }}</h3>
              <p class="m-0">en <span class="verde m-0"><span>{{ meses }}</span>  x $ {{ mensualidad }} sin interés</span></p>
              <p class="my-n1">IVA incluido</p>
            </div>
            <div class="my-3">
              <span class="linksurl">Ver los medios de pago</span>
            </div>
            <div class="mt-5">
              <p>Lo que tienes que saber de este producto</p>
              <ul v-for="(carac,index) in caracteristicas" v-bind:key="index">
                <li>{{ carac }}</li>
              </ul>
            </div>
            <div class="my-3">
              <span class="linksurl">Caracteristicas</span>
            </div>
            <div class="mt-5">
              <span>Opciones de compra</span>
            </div>
            <div class="my-3">
              <p class="linksurl m-0"> productos usados y reacondicionados</p>
            </div>
          </div>
          <div class="col texts1 mt-3 border p-5 rounded">
            <p class="verde mb-2"><i class="bi bi-truck"></i> 🚚 Llega gratis el <span style="font-weight: 600;">{{ especDia }}</span></p>
            <p class="mx-4">Comprando dentro de los proximos</p>
            <p class="mx-4 mt-n3 red1">{{ minutos }} min</p>
            <span class="linksurl mx-4"><i class="bi bi-geo-alt"></i> Enviar a {{ direccion }}</span>
            <div class="my-4">
              <p>Tienda oficial <span class="linksurl">{{ tienda }}</span></p>
              <p class="mt-n3">{{ numVentas }} ventas</p>
            </div>
            <div>
              <p><strong>Stock disponible</strong></p>
            </div>
            <div>
              <p>Cantidad: <strong>{{ Existencia }} unidades </strong><span class="oscuro">({{ totalProd }} disponibles)</span></p>
            </div>
            <div>
              <button class="btn btn-primary"> Comprar ahorita</button>
              <br>
              <button class="btn btn-ligth"> Agregar al carrito</button>
            </div>
            <div class="mt-5">
              <p class="my-4"><span class="linksurl"><i class="bi bi-arrow-90deg-left"></i> Devoluciones gratis.</span> Tienes 30 dias desde que lo recicbes.</p>
              <p class="my-4"><span class="linksurl"><i class="bi bi-shield-plus"></i> Compra Protegida.</span> Recibe el producto que esperabas o te devolvemos el dinero.</p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </template>

<script>
import info from './LoginView.json'
import axios from 'axios';
const  inicio =  'http://localhost/';
export default {
  data: function () {
      return {
          inicio2: inicio  ,
          nombre: info.nombre,
          estrellas: info.estrellas,
          vendidas: info.vendidas,
          precio: info.precio,
          mensualidad: info.mensualidad,
          minutos: info.minutos,
          direccion: info.direccion,
          totalProd: info.totalProd,
          Existencia: info.Existencia,
          tienda: info.tienda,
          totalVentas: info.totalVentas,
          meses: info.meses,
          especDia: info.especDia,
          img1: info.img1 ,
          img2: info.img2,
          img3: info.img3,
          img4: info.img4,
          img5: info.img5,
          go: info.go,
          feat: info.feat,
          princ: info.princ,
          caracteristicas: info.caracteristicas,
          dic: info.dic,
          mer: info.mer,
          mod: info.mod,
          Ven: info.Ven,
          help: info.help,
      

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
      },
  }
}
</script>

<style scoped>

.red1{
color: rgb(170, 48, 11);
}
.verde{
color: rgb(40, 202, 40);
}
.naranja{
background-color: orange;
width: fit-content;
border-radius: 5px;
color: white;
font-weight: 600;
}


.body1{
width: 65%;
}
.texts{
font-size: .8rem;
text-align: left;
}
.texts1{
text-align: left;
}
.oscuro{
font-size: .7rem;
color: gainsboro;
}
.linksurl{
color: cornflowerblue;
}
.ajusta{
overflow: auto;
}
:root {
  --body-bg-color: #1a1c1d;
  --text-color: #aaaebc;
  --hr-color: #26292a;
  --timing-function: cubic-bezier(0.82, 0.2, 0.42, 1);
  --red: #e74c3c;
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
  padding: 10px;
  overflow: hidden;
  transition: color 0s 0.25s var(--timing-function);
}

.menu a::before,
.menu a::after {
  position: absolute;
  left: 0;
  width: 100%;
}

.menu a::before {
  content: '';
  top: 50%;
  transform: translate(-101%, -50%);
  height: 50%;
  z-index: 1;
  background: var(--text-color);
  transition: transform 0.5s var(--timing-function);
}

.menu a::after {
  content: attr(data-icon);
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-color);
  opacity: 0;
  transition: opacity 0s 0.25s var(--timing-function);
}

.menu a:hover {
  color: transparent;
}

.menu a:hover::before {
  transform: translate(101%, -50%);
}

.menu a:hover::after {
  opacity: 1;
}


/* ANIMATIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.menu[data-animation="to-left"] a::before {
  transform: translate(101%, -50%);
}

.menu[data-animation="to-left"] a:hover::before {
  transform: translate(-101%, -50%);
}

</style>
