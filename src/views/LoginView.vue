<template>
  <div>

<div class="container text-center">
<div class="row">
  <div class="col">
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade ancho" data-bs-ride="carousel">
<!-- Slides -->
<div class="carousel-inner mb-5">
  <div class="carousel-item active">
    <img :src=img1 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=img2 class="d-block w-100 alto" alt="..." />
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
</div>
</div>

  </div>
  <div class="col">
    <h20><p style="text-align: left;"><a href="#" class="text-secondary"></a>Nuevo | {{ vendidas }} vendidos</p></h20>
    <h4><p style="text-align: left;"><b>{{ nombre }}</b></p></h4>
    <h15><p style="text-align: left;" class="text-primary"> ★ ★ ★ ★ ★ {{ totalStars }}</p></h15>
    <h15><p style="text-align: left;"><button type="button" class="btn btn-warning">MÁS VENDIDO</button></p></h15>
    <h2><p style="text-align: left;" class="text-uppercase">${{ precio }}<small>.25</small></p></h2>
    <h15><p style="text-align: left;">en <span style="color: green;"> {{ meses }}x ${{ mensualidad }} sin interés</span></p></h15>
    <h15><p style="text-align: left;"><a href="#" class="text-primary">Ver los medios de pago</a></p></h15>
    <h15><p style="text-align: left;"><b>Lo que tienes que saber de este producto</b></p></h15>
      <ul>
        <li v-for="caracteristica in caracteristicas" :key="caracteristica.id" style="text-align: left;">{{ caracteristica.texto }}</li>
      </ul>
    <h7><p style="text-align: left;"><a href="#" class="text-primary">Ver características</a></p></h7>
    <h8><p style="text-align: left;">Opciones de compra: </p></h8>
    <h9><p style="text-align: left;"><a href="#" class="text-primary">{{ productos }}</a></p></h9>

  </div>
  <div class="col, card" style="width: 18rem;">

      <h9><p class="text-success" style="text-align: left;">Llega gratis <b>{{ dia }} <i>ϟ FULL</i></b></p></h9>
      <h15 class="text-secondary"><p style="text-align: left;">Comprando dentro de las próximas <b>{{ minutos }}</b> </p></h15>
      <h15><p style="text-align: left;"><a href="#" class="text-primary">📍 Enviar a {{ direccion }}</a></p></h15>
      <h15><p style="text-align: left;">Tienda Oficial <a href="#" class="text-primary">{{ tienda }}</a></p></h15>
      <h15><p style="text-align: left;"><b>Stock Disponible</b></p></h15>
      <h15><p style="text-align: left;">Cantidad: <b>{{ unidades }} unidad </b>⌄  <small><span style="color: darkgray;">({{ disponibles }})</span></small></p></h15>
      <button type="button" class="btn btn-primary">Comprar ahorita</button>
      <h16><span style="color: white;">texto en blanco</span></h16>
      <button type="button" class="btn btn-info">Agregar al carrito</button> 
      <h16><span style="color: white;">texto en blanco</span></h16>
      <textarea class="cuadro-sombreado">ϟ FULL te da envío gratis. Agrega a tu carrito $299 en productos Full y recíbelos gratis.</textarea>
      <h16><span style="color: white;">texto en blanco</span></h16>
      <h15><p style="text-align: left;"><span style="color: gray;">↩ </span><a href="#" class="text-primary">{{ devGratis }}</a><span style="color: gray;">. Tienes 30 días desde que lo recibes.</span> </p></h15>
      <h15><p style="text-align: left;"><span style="color: gray;">🛡️ </span><a href="#" class="text-primary">{{ comProteg }}</a><span style="color: gray;">, recibe el producto que esperabas o te devolvemos tu dinero.</span></p></h15>
      <h15><p style="text-align: left;"><span style="color: gray;">🏆 </span><a href="#" class="text-primary">{{ devGratis }}</a><span style="color: gray;">. Sumas 92 puntos.</span></p></h15>

  </div>
</div>
</div>

  </div>
</template>

<script>
//mport axios from 'axios'
//const inicio= 'https://linuxhint.com/wp-content/uploads/2018/03/'
// localhost
// 127.0.0.1
// 10.0.2.15
const inicio='http://10.0.2.15/'
export default {
  data: function () {
      return {
          
          img1: inicio + 'control.jpg',
          img2: inicio + 'controles-1.jpg',
          img3: 'file:///home/ubuntu/development/code/picturess/control2.jpg',

          nombre: "Control inalámbrico DualSense Edge",
          totalStars: "   (897)",
          vendidas: "+1000",
          precio: "4,947",
          mensualidad: "512",
          minutos: "10 horas",
          direccion: "Estado de México",
          numVentas: "+5mil",
          totalProd: "9",
          unidades: "1",
          disponibles: "6 disponibles",
          tienda: "SONY Entertainment",
          totalVentas: "+1000",
          meses:"7",
          especDia: "Llega gratis",
          dia: "Miércoles",
          caruselActivo: "carousel-item active",
          caruselInactivo: "carousel-item",
          productos: "14 productos nuevos desde $1579.21",
          devGratis: "Devolución gratis",
          comProteg: "Compra Protegida",
          mercPts: "Mercado Puntos",
          dimg: [
              "D-1.jpg", 
              "D-2.jpg", 
              "D-3.jpg", 
              "D-4.jpg", 
              "D-5.jpg", 
              "D-5.jpg",
              "D-5.jpg",
              "D-5.jpg",
              "D-5.jpg",
              "D-5.jpg",
              "D-5.jpg"
          ],
          cabecera: {
              desc: "Edad",
              longdesc: "Selecciona el rango de tu edad"
          },
          caracteristicas: [
            { id: 1, texto:" Cuenta con Bluetooth"}, 
            { id: 2, texto:" Pantalla táctil"}, 
            { id: 3, texto:" Mando inalámbrico"}, 
            { id: 4, texto:" Compatible con: Computadoras, PlayStation 5, Tablets, Televisores y TV box"}, 
            { id: 5, texto:" Incluye un control"},
            { id: 6, texto:" Con sistema de vibración incorporado"},
            { id: 7, texto:" Diversión garantizada con tu joystick PlayStation"},
            { id: 8, texto:" Diseño ergonómico"}
    ]

          
      }
  }
}
</script>

<style scoped>

.secondary-button {
  background-color: lightblue;
  color: blue;
}

.cuadro-sombreado {
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  height: 150px;
  color:black;
}

col{
  text-align: left;
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