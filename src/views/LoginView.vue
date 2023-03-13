<template>
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary navigation">
  <div class="container-fluid">
    <a class=" navbar-brand" href="#"><img class="logo" src="@/assets/mercado.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navigation">
      <ul class="navbar-nav me-auto mb-5 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">{{ contenido.longdesc }}</a>
        </li>
      </ul>
    </nav>

<div  class="container back ">
  <div class="row mx-auto">
    <div class="col">
      <!-- Carousel wrapper -->
      <div id="carouselExampleIndicators" class="carrusel carousel slide carousel-fade ancho" data-bs-ride="carousel">
      <!-- Slides -->
       <div class="carousel-inner mb-5">
        <div :class="selecciona(index)" v-for="(elemento, index) in img" v-bind:key="index">
            <img :src=inicio2+elemento class="d-block w-100 alto" alt="..." />
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
      <div class="carousel-indicators" style="margin-bottom: 100px;">
        <span class="ajusta" v-for="(miniatura,index) in img" v-bind:key="index">
          <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to=index class="active"
            aria-current="true" aria-label="Slide 1" style="width: 70px;">
            <img :src=inicio2+img[index] class="d-block w-100 img-fluid"/>
        </button>
      </span>
     </div>
  </div>
<!-- Carousel wrapper -->
    </div>
    <div  class="col text-start">
      <div class="card-body tarjeta2">
        <p class="card-text">Nuevo | {{ vendido }} vendidos</p>
        <h4>Oferta del Dia</h4>
        <h4>{{ nombre }}</h4>
        <h4>{{ precio }}</h4>
        <p class="card-text">en monitores de computadoras</p>
        <p class="card-text">Nuevo | {{ vendido }} vendidos</p>
        <p class="card-text">Lo que tienes que saber de este producto</p><br>
       <div class="aling-head">
        <ul v-for="(carac,index) in caracteristicas" v-bind:key="index">
           <li>{{ carac }}</li>
        </ul>
      </div>
      </div>
    </div>
    <div class="col tarjeta">
      <div class="card" style="width: 18rem;">
         <div class="card-body text-start">
            <p class="card-text">Envio gratis a todo el pais</p>
            <p class="card-text">conoce los tiempos y las formas de envio</p>
            <p class="card-text"><span class="span">Calcular cuándo llega</span></p>
            <p class="card-text">Tienda oficial <span class="span">{{ tienda }}</span></p>
            <h6 class="card-text">Stock disponible {{ agotado }}</h6>
            <button type="button" class="btn btn-primary boton">Comprar ahorita</button>
            <button @clic="mensaje4" type="button" class="btn btn-info boton">Agregar al carrito</button>

            <p class="card-text"><span class="span">Devolucion gratis</span>. Tienes 30 dias desde que lo recibes</p>
            <p class="card-text"><span class="span">Compra Protegida</span>, recibe el producto que esperabas o te devolvemos tu dinero.</p>
            <p class="card-text"><span class="span">Mercado puntos.</span> Sumas {{ puntos }} puntos.</p>
            <p class="card-text">12 meses de garantia de fábrica.</p>
         </div>
       </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import info from './LoginView.json';
const inicio = 'http://127.0.0.1/'
//const inicio2= 'https://winia.mx/archivos/productos/thumbnail/'
export default {
    data: function () {
        return {
            inicio2:inicio,
            contenido: info.cabecera,
            caracteristicas:info.caracteristicas,
            nombre: info.nombre,
            agotado:info.agotado,
            vendido: info.vendido,
            tienda: info.tienda,
            puntos: info.puntos,
            carruselActivo: info.carruselActivo,
            carruselInactivo: info.carruselInactivo,
            img:info.img,
        }
    },
    methods: {
        carga: function() {
            axios.get('http://localhost:8080/pro/articulos', {
              }).then(response => {
                console.log(response.data)
                  this.mensaje4 = response.data; 
              })
        },
        cambia: function() {
            this.mensaje3 = 'hola mundo'
        },
        selecciona: function(index){
          return(index==0)?this.carruselActivo:this.carruselInactivo;
        }
    } // aqui concluyen los métodos
}
</script>

<style scoped>
h4 {
    color:black;
    text-decoration: solid;
}
body {
background-color: yellow;
}
.carrusel {
    width: 500px;
    margin-top: 20px;
    margin-bottom: 500  px;
}
.navigation{
  background-color: #eddf07;
}
.logo{
  width: 150px;
  height: 38px;
}
.back{
  background-color: white;
  margin-top: 60px;
}
.tarjeta{
  margin-top: 20px;
}
.tarjeta2{
  margin-top: 40px;
}
.boton{
  width: 200px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.span{
  color: dodgerblue;
}
.alto{
  height:  700px;
}
.ajusta{
  max-width: 500px;
  overflow-y: scroll;
}


</style>