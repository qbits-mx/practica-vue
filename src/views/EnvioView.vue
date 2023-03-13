<template>
<nav class="navbar navbar-expand-lg  hell d-flex justify-content-around">
          <div class="d-flex">
            <a class="navbar-brand" href="#"><img :src=inicio2+img1  class="pic"></a>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item tes">
                  <p> Ayuda </p>
                </li>
                <li class="nav-item">
                </li>
              </ul>
            </div>
          </div>
   </nav>

<div class="container">
  <div class="row">
    <div class="col">
      <div class="too">
      <h2> Elige dónde recibir tu compra</h2>
    </div>
    <br>
    <ul class="list-group tamaño2">
  <li class="list-group-item">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
             <h5 class="card-title alin">Enviar a tu domicilio </h5> 
            <h5><snap class="al"> ${{ envio }}</snap> </h5> 
             <p class="card-text alin">Av. San Jerónimo, San Jerónimo Lídice, Mexico City, CDMX</p>   
  </label>
</div>
  </li>
  <li class="list-group-item"><a href="#" class="btn btn-link">Editar o elegir otro punto</a></li>
    </ul>
  <ul class="list-group tamaño2 ajuste">
    <li class="list-group-item">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    <h5 class="card-title">Retirar en un punto de entrega</h5>
    <h5><snap class="al"> ${{ envio }}</snap> </h5> 
    <p class="card-text"> Agencia Mercado libre-INTERNET GUS| BECAL 3444 a 10km de tu ubicacion</p>
      
  </label>
</div>
  </li>
  <li class="list-group-item"><a href="#" class="btn btn-link">Editar o elegir otro punto</a></li>
    </ul>
    <button type="button " class="btn btn-primary ger">Continuar</button>
  </div>

    <div class="col">
      <div style="width: 18rem;">
  <div class="card-body tamaño">
    <br>

    <h5 class="card-title">resumen de compra <span> </span></h5>
    <br>
    <br>
    <div class="linea"></div>
    <br>
    <br>
    <span> productos ({{ ptotal }}) <br> Envío </span>
    <br>
    <br>
    <div class="linea"></div>
    <br>
    <br>
    <br>
     <snap>Pagas  ${{ total }}</snap>
  <div class="card-body">
    <button type="button" class="btn btn-info">Pagar</button>


  </div>
  </div>
  </div>
</div>
    </div>
  </div>


</template>
<script>
import info from './EnvioView.json'
import axios from 'axios';
const  inicio =  'http://localhost/';
export default {
  data: function () {
      return {
          inicio2: inicio  ,
          img1: info.img1 ,
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
.tamaño{
  width: 500px;
  height: 800px;
  background: #F3F0EF;

}
.tamaño2{
  width: 500px;
  height: 300px;
}
.ajuste{
  margin-top: -125px;
}
.ll{
  text-align: left;
}
.giga{
  align-items: left;
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
.hell{
  background-color: #fff159;
}
.pic{
  height: 50px;
  margin-right: 700px;
  
}
.tes{
  margin-left: 300px;
}
.ger{
  width: 100px;
  height: 50px;
  margin-top: -200px;
  margin-right: -350px;
}
.too{
  margin-top: 50px;
}
.alin{
  text-align: left;
}
.al{
  margin-left: 400px;
  margin-top: -100px;
}
.linea {
  border-top: 1px solid gray;
  height: 1px;
  width: 400px;
  padding: 0;
  margin: 10px auto 10 auto;
}
</style>