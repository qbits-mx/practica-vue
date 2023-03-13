<template>
  
  <nav class="navbar navbar-expand-lg  hell d-flex justify-content-around">
          <div class="d-flex">
            <a class="navbar-brand" href="#"><img :src=inicio2+img1  class="pic"></a>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <p> Ayuda </p>
                </li>
                <li class="nav-item">
                </li>
              </ul>
            </div>
          </div>
        </nav>

<br>
<br>
<div class="ll">
    <h2> Elije dónde recibir tu compra</h2>
</div>
<br>
<br>
<body>
  <div class="margin1">

          <div class="col texts1 mt-2 border p-5 rounded">
   
<div class="text-center">
  <div class="row">
    <div class="col-5 col-lg-8"><div class="card w-50">
  <div class="card-body">
    <div class="ll"> <input type="checkbox" id="btn-menu">
    <h5 class="card-title">Enviar a tu domicilio</h5>
    <p class="card-text">Av. San Jerónimo, San Jerónimo Lídice, Mexico City, CDMX</p>
    <p> <snap> ${{ envio }}</snap> </p>

    <div class="linea"></div>
    <a href="#" class="btn btn-link">Editar o elegir otro punto</a>
  </div>
</div></div>
<div class="card w-50" style="width: 300px">
  <div class="card-body">
    <div class="ll"> <input type="checkbox" id="btn-menu">
    <h5 class="card-title">Retirar en un punto de entrega</h5>
    <p class="card-text"> Agencia Mercado libre-INTERNET GUS| BECAL 3444 a 10km de tu ubicacion</p>
    <p> <snap> ${{ envio }}</snap> </p>
    <small>De lunes a viernes de 111:00 a 19:00</small>
    <br>
    <div class="linea"></div>
    <a href="#" class="btn btn-link">Ver punto en el mapa o elegir otro</a>
  </div>
</div>
</div></div>
    <div class="col-5 col-lg-8 ">        
       <div class="gal">   
              <div class="card text">
    <div class="card-body">
    <h5 class="card-title">resumen de compra <span> </span></h5>
    <br>
    <br>
    <br>
    <br>
  <ul class="list-group card text-white bg-secondary mb-3">
    <li class="list-group-item"><span> productos ({{ ptotal }}) <br> Envío </span></li>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>   <br>
    <br>
    <br>   <br>
    <br>
    <br>
    <li class="list-group-item">Pagas <snap> ${{ total }}</snap></li>
  </ul>
  <div class="card-body">
    <button type="button" class="btn btn-info">Pagar</button>
  </div>
  </div>
  </div>
</div>  
</div>  
</div>
</div>
  </div>
  </div>
      
    </body>
<footer class="page-footer">
  <small>Copyright © 1999-2023 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado Libre".
Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito Juarez, 03940 Ciudad de México, CDMX, Mexico 
  </small>
</footer>
<!------------------------------------------->
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


</template>

<script>
import info from './EnvioView.json'
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
          ptotal:info.ptotal,
          productos:info.productos,
          envio:info.envio,
          total: info.productos+info.envio,

      

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


<style>
.ll{
  text-align: left;
}
.giga{
  align-items: left;
}
.card{
  align-items: right;
}
.linea {
  border-top: 1px solid gray;
  height: 1px;
  padding: 0;
  margin: 20px auto 0 auto;
}
.gal{
  width: 95%;
  justify-content:center;
  align-items: right;
  align-content: margin-right;
  
    height: 70%;
    margin:auto;
    overflow:visible;
}
.col-10{
  align-content: center;
  width: 90%;
}

.col-2{
  width: 10%;
}
.hell{
  background-color: #fff159;
}
.margin1{
margin-left: 0%;
}
.pic{
  height: 40px;
}
</style>
