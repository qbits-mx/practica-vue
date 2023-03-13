<template>

     <nav class="navbar  navbar-expand-lg hell d-flex justify-content-around">
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
                    <h2><a href="#"> Carrito <span style="font-weight: 600;">({{ carrit }})</span></a>
                    <a href="#">Guardados <span style="font-weight: 600;">({{ guar }})</span></a></h2>
                    <div class="linea"></div>
            </nav>

    <div class="w-100"></div>
  </div>
  <div class="card-body">
  </div>
</div>
  <br>
 <div class="cierto">

    <div class="hola">
        <img :src=inicio2+img2 class="d-block w-100 alto" alt="..." />

    </div>
    <h2 class="card-text"><span> {{ nombre }}</span></h2>
    <h1 class="ley" ><span> $ {{ costo1 }}</span> </h1>
+
    <div class="prime">
        <div class="input-group mb-3">
      <span class="input-group-text">Cantidad:</span>
      <input type="number" class="form-control" aria-label="Cantidad" min="1" :max= dis value= disponibles>
      <a > <span class="input-group-text">Disponibles({{ dis }})</span></a>

    </div>


    </div>

              <button class="btn btn-link"> Eliminar</button>
              <button class="btn btn-link"> Mas productos del contacto</button>
              <button class="btn btn-link"> Comprar ahora</button>
              <button class="btn btn-link"> Guardar para despues</button>
              
            </div>
            </div>
            <div class="container text-center">
  <div class="row">
    <div class="w-100"></div>
  </div>
  
</div>

 <div class="cierto">

    <div class="hola">
        <img :src=inicio2+img1 class="d-block w-100 alto" alt="..." />

    </div>
    <h2 class="card-text"> <span> {{ nombre2 }}</span></h2>
    <h1 class="ley" ><span> $ {{ costo2 }}</span> </h1>
    <div class="prime">
        <div class="input-group mb-3">
      <span class="input-group-text">Cantidad:</span>
      <input type="number" class="form-control" aria-label="Cantidad" min="1" :max=disu value= disponibles>
      <a > <span class="input-group-text">Disponibles({{ disu }})</span></a>

    </div>


    </div>

              <button class="btn btn-link"> Eliminar</button>
              <button class="btn btn-link"> Mas productos del contacto</button>
              <button class="btn btn-link"> Comprar ahora</button>
              <button class="btn btn-link"> Guardar para despues</button>
              <div class="linea"></div>

              
              <div class="prime"><h2 > <span>costo de Envio ${{ envio }}</span>
                <div class="linea"></div>

                <br>
                <span class="prime">El costo total es ${{ costoFinal }}</span></h2>

</div>
            </div>
          </div>

          
  <footer class="page-footer">
  <small>Copyright © 1999-2023 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado Libre".
Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito Juarez, 03940 Ciudad de México, CDMX, Mexico 
  </small>
</footer>







</template>

<script>
import info from './CarritoView.json'
export default {
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

.linea {
  border-top: 1px solid gray;
  height: 1px;
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
    text-align:left;
    max-width: 10%;
 max-height: 10%;

}
.one{
    text-align:right;
    text-overflow:clip;	
}
.prime{
    text-align:right;

}
.ley{
    text-align:right;
    text-justify:auto;	
}
.hell{
  background-color: #fff159;
}
</style>
