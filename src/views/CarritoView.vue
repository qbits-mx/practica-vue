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
   <br>
   <br>

<div class="card bg-light mb-3">
  <div class="col texts1 mt-2 border p-5 rounded">
    <div class="container text-center">
  <div class="row">

        <div class="container">
            
            </div> <nav class="menu">
                <a href="#">Carrito ({{ carrit }})</a>
                <a href="#">Guardados ( {{ guar }})</a>
                <!--creacion de las pestañas del menu-->
            </nav>
    
    <br>
    <div class="linea"></div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>
  </div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  <br>
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
</template>

<script>
import info from './CarritoView.json'
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
          carrit: info.carrit, 
          guar:info.guar, 
      

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
  }
}
</script>

<style scoped>

.linea {
  border-top: 1px solid black;
  height: 2px;
  padding: 0;
  margin: 20px auto 0 auto;
}

      .container{
    max-width: 1200px;
    width: 90%;
    margin:auto;

}

.container .menu {
    float: left;
    line-height: 100px;
    text-align:left;
    text-overflow:clip;
}
.container .menu a {
    display: inline-block;
    padding: 15px;
    line-height: normal;
    text-decoration: none;
    color: black;/*diferentes colores */
    transition: all 0.3s ease;/*da un cierto tiempo de trancision para dar el cambio*/
    border-bottom:  2px solid transparent;
    font-size: 30px;
    margin-right: 5px;

}
.container .menu a:hover {
    border-bottom: 2px solid #c7c7c7;
    padding-bottom: 5px;
}
</style>
