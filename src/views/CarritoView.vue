<template>
<body>
<NavComponents/>
<div>
<ul class="list-group tamaño">
  <li class="list-group-item">

    <nav class="menu">
          <div class="teco">
            <h5><a href="#"> Carrito <span style="font-weight: 200;">({{ carrit }})</span></a>
            <a href="#">Guardados <span style="font-weight: 600;">({{ guar }})</span></a></h5>
            </div>
            <div class="linea1"></div>
            </nav>
    <div class="hola">
    <img :src=inicio2+img1 class="d-block w-100 alto" alt="..." />

</div>
<h2 class="card-text alins"> <span> {{ nombre2 }}</span></h2>
<h1 class="ley1" ><span> $ {{ costo2 }}</span> </h1>
<div class="prime">
    <div class="input-group mb-3">
  <span class="input-group-text">Cantidad:</span>
  <input type="number" class="form-control " aria-label="Cantidad " min="1" :max=disu value= disponibles>
  <a > <span class="input-group-text">Disponibles({{ disu }})</span></a>
</div>
</div>
          <button class="btn btn-link"> Eliminar</button>
          <button class="btn btn-link"> Mas productos del contacto</button>
          <button class="btn btn-link"> Comprar ahora</button>
          <button class="btn btn-link"> Guardar para despues</button>
  </li>
  <li class="list-group-item">

    <div class="hola">
    <img :src=inicio2+img2 class="d-block w-100 alto" alt="..." />

</div>
<h2 class="card-text alins"> <span> {{ nombre }}</span></h2>
<h1 class="ley1" ><span> $ {{ costo1 }}</span> </h1>
<div class="prime">
    <div class="input-group mb-3">
  <span class="input-group-text">Cantidad:</span>
  <input type="number" class="form-control " aria-label="Cantidad " min="1" :max=dis value= disponibles>
  <a > <span class="input-group-text">Disponibles({{ dis }})</span></a>
</div>
</div>
          <button class="btn btn-link"> Eliminar</button>
          <button class="btn btn-link"> Mas productos del contacto</button>
          <button class="btn btn-link"> Comprar ahora</button>
          <button class="btn btn-link"> Guardar para despues</button>

  </li>
  <li class="list-group-item">

          <br>
          <div class="nuu"><h2 > <span>costo de Envio ${{ envio }}</span>
            <br>
            <br>
            <span > El costo total es ${{ costoFinal }}</span></h2>

</div>
       
  </li>

</ul>
</div>

 
</body>
<FooterComponent />



</template>

<script>
import info from './CarritoView.json'
import FooterComponent from '../components/FooterComponent.vue'
import NavComponents from '../components/NavComponents.vue'
export default {
  components:{
    FooterComponent,
    NavComponents
  },
  data: function () {
      return {
          inicio2:info.inicio,
          nombre: info.nombre,
          img1: info.img1 ,
          img2: info.img2,
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
          dis: info.dis,
          disu: info.disu,
          costo1: info.costo1,
          costo2: info.costo2,
          n: info.n,
          envio: info.envio,
          costoFinal:info.costo1+info.costo2+info.envio,
          nombre2:info.nombre2





      

      }
  },
 /* methods: {
      carga: function() {
    while (n == disponibles){
         n ++;
         cost=costo1+costo1 
         }
      },   */
  }

</script>

<style scoped>

.tamaño{
  margin-top: 50px;
  margin-left: 100px;
  width: 1080px;

}
.linea {
  border-top: 1px solid gray;
  height: 1px;
  padding: 0;
  margin: 10px auto 0 auto;
}
.linea1 {
  border-top: 1px solid gray;
  height: 1px;
  padding: 0;
  width: 800px;
  margin: 10px auto 0 auto;
}
.linea2 {
  border-top: 1px solid gray;
  height: 1px;
  padding: 0;
  width: 1100px;
  margin: 10px auto 0 auto;
}
.linea3 {
  border-top: 1px solid gray;
  height: 1px;
  padding: 0;
  width: 1100px;
  margin-left: -850px;
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
 .cierto {
    text-align:left;

    
}
.hola{
    text-align:center;
    max-width: 20%;
 max-height: 10%;

}

.prime{
    width: 100px;
    margin-left: 800px;
    margin-top: -100px;

}
.prime1{
    width: 100px;
    margin-left: 750px;
    margin-top: -220px;
}
.ley{
     margin-top: -700px;
}
.ley1{
    text-align:right;
    text-justify:auto;	
}
.hell{
  background-color: #fff159;
}
.teco{
  margin-left: -800px;
}
.yum{
  margin-right: 100px;
 margin-left: 100px;
}
.nuu{
margin-left: 750px;
margin-top: 100PX;

}


.alins{
  margin-left: 100px;
  margin-top: 180px;
  text-align:left;
    width: 100%;
  

}


</style>
