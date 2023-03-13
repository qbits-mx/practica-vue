<template>
    <div class="exampleone">
 Lorem ipsum dolor sit amet, consectetuer
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
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=inicio2+img1 alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

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
</style>
