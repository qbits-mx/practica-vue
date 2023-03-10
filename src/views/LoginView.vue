<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light amarillo">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
  <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo-pt__large_plus.png" alt="Logo de Mercado Libre" />
</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Categorías -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCategories" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownCategories">
            <li><a class="dropdown-item" href="#">Categoría 1</a></li>
            <li><a class="dropdown-item" href="#">Categoría 2</a></li>
            <li><a class="dropdown-item" href="#">Categoría 3</a></li>
            <li><a class="dropdown-item" href="#">Categoría 4</a></li>
            <li><a class="dropdown-item" href="#">Categoría 5</a></li>
          </ul>
        </li>

        <!-- Ofertas -->
        <li class="nav-item">
          <a class="nav-link" href="#">Ofertas</a>
        </li>

        <!-- Historial -->
        <li class="nav-item">
          <a class="nav-link" href="#">Historial</a>
        </li>

        <!-- Supermercado -->
        <li class="nav-item">
          <a class="nav-link" href="#">Supermercado</a>
        </li>

        <!-- Moda -->
        <li class="nav-item">
          <a class="nav-link" href="#">Moda</a>
        </li>

        <!-- Vender -->
        <li class="nav-item">
          <a class="nav-link" href="#">Vender</a>
        </li>

        <!-- Ayuda -->
        <li class="nav-item">
          <a class="nav-link" href="#">Ayuda</a>
        </li>
      </ul>

      <form class="d-flex position-absolute top-50 start-50 translate-middle">
        <div class="input-group">
          <input class="form-control" type="search" placeholder="Buscar productos, marcas y mas..." aria-label="Buscar" />
          <button class="btn btn-outline-secondary" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
        
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Ingresar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Crear cuenta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mis compras</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<div class="container text-start">
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
<div class="card">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Nuevo | {{ vendidos }}</h6>
    <h5 class="card-title">{{ tituloProducto }}</h5>
    
    <p class="card-text">
       {{favorito}} 
       <span class="fa fa-star text-primary"></span>
       <span class="fa fa-star text-primary"></span>
       <span class="fa fa-star text-primary"></span>
       <span class="fa fa-star text-primary"></span>
       <span class="fa fa-star text-primary"></span>
    </p>
    <p class="card-text">{{ opiniones }}</p>

    <p class="card-text">RECOMENDADO en Consolas de videojuegos</p>
    <p class="card-text">Precio anterior: {{ precio3 }}</p>
    <h4 class="card-text text-danger"><s>{{ precio2 }}</s> {{ precio }}</h4>
    <p class="card-text">{{ descuento }} {{ plazos }}</p>
    <h6 class="card-text"><strong>IVA incluido</strong></h6>
    <p class="card-text">{{ mediosPago }}</p>
    <hr>
    <p class="card-text"><strong>{{ ofertaDia }}</strong></p>
   
    <p class="card-text">Lo que tienes que saber de este producto</p>
   
    <ul v-for="(carac,index) in caracteristicas" v-bind:key="index">
           <li>{{ carac }}</li>
        </ul>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-truck"></i>{{ envioGratis }}</h6>
    <p class="card-text">Conoce los tiempos y las formas de envío.</p>
    <a href="#" class="card-link">{{ calcularLlegada }}</a>
    <p class="card-text"><strong>{{ tienda }}</strong></p>
    <p class="card-text">{{ ventas }}</p>
    <hr>
    <p class="card-text"><strong>{{ stock }}</strong></p>
    <div class="input-group mb-3">
      <span class="input-group-text">Cantidad:</span>
      <input type="number" class="form-control" aria-label="Cantidad" min="1" max="14" value="1">
      <span class="input-group-text">unidad</span>
      <span class="input-group-text">{{ disponibles }}</span>
    </div>
    <button type="button" class="btn btn-primary btn-lg btn-block mt-5">Comprar ahorita</button>
    <button type="button" class="btn btn-outline-primary btn-lg btn-block mt-3">Agregar al carrito</button>
      
    <hr>
    <div class="d-flex align-items-center mb-3">
  <i class="fa-solid fa-arrow-rotate-left  fa-lg text-success me-2"></i>
  <p class="card-text mb-0"><strong>Devolución gratis.</strong> Tienes 30 días desde que lo recibes.</p>
</div>
<div class="d-flex align-items-center mb-3">
  <i class="fa-solid fa-shield-halved fa-lg text-success me-2"></i>
  <p class="card-text mb-0"><strong>Compra Protegida.</strong> Se abrirá en una nueva ventana, recibe el producto que esperabas o te devolvemos tu dinero.</p>
</div>
<div class="d-flex align-items-center mb-3">
  <i class="fa-solid fa-trophy fa-lg text-warning me-2"></i>
  <p class="card-text mb-0"><strong>Mercado Puntos.</strong> Se abrirá en una nueva ventana. {{ puntos }} </p>
</div>
  </div>
</div>
</div>



  
  
</div>
</div>





  </div>
</template>

<script>
import info from './datos2.json'
import axios from 'axios'
//const inicio= 'https://linuxhint.com/wp-content/uploads/2018/03/'
// localhost
// 127.0.0.1
// 10.0.2.15


export default {
  data: function () {
      return {
          contenido: info.cabecera,
          favorito: info.favorito,
          tienda: info.tienda,
          mensaje: info.mensaje,
          mensaje2: info.mensaje2,
          mensaje3: info.mensaje3,
          mensaje4: info.mensaje4,
          precio: info.precio,
          precio2: info.precio2,
          precio3: info.precio3,
          descuento: info.descuento,
          plazos: info.plazos,
          vendidos: info.vendidos,
          tituloProducto: info.tituloProducto,
          mediosPago: info.mediosPago,
          ofertaDia: info.ofertaDia,
          ventas: info.ventas,
          opiniones: info.opiniones,
          stock: info.stock,
          calcularLlegada: info.calcularLlegada,
          disponibles: info.disponibles,
          puntos: info.puntos,
          envioGratis: info.envioGratis,
          caracteristicas:info.caracteristicas,

          img1: info.img1,
          img2:  info.img2,
          img3:  info.img3,
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
      seleciona: function(indice) {
        if 
        (indice == 0){
          return this.caruselActivo;
        }else{
          return this.caruselInactivo;
        }
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
.amarillo{
  background-color: #fff159;
  margin-bottom: 75px;
  width: 100%;
}


</style>