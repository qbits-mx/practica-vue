<template>
  <div>
    <div>
      <p class="verde text-start">
        <i class="fa-solid fa-truck separa"></i> {{ entrega }}
      </p>
      <div class="ml-3 entrega">
        <p class="text-start">
          <i class="fa-solid fa-bolt-lightning verde separa"></i>
          <span class="verde">{{ full }}</span>
        </p>
        <p class="text-start">conoce los tiempos y las formas de envio</p>
        <p class="text-start blue">
          <i class="fa-solid fa-location-dot mr-2 separa"></i>{{ llegada }}
        </p>
      </div>
      <div class="text-start">
        <p>
          Vendido por <span class="blue">{{ vendedor }}</span>
        </p>
        <p>{{ ventas }}ventas</p>
        <h3 class="bold">{{ disponibilidad }}</h3>
      </div>
      <div class="d-grid gap-2 mb-3">
        <button class="btn btn-primary d-block crece">Comprar ahorita</button>
        <button class="btn blue addToCar">Agregar al carrito</button>
      </div>
      <div>
        <p class="text-start">
          <i class="fa-solid fa-arrow-rotate-left separa"> </i
          ><span class="blue separa"> Devolucion gratis.</span>Tienes
          {{ garantiaDias + garantiaTiempo }} desde que lo recibes
        </p>
        <p class="text-start">
          <i class="fa-solid fa-shield-halved separa"> </i
          ><span class="blue separa"> Compra protegida</span>recibe el producto
          que esperabas o te devolvemos tu dinero.
        </p>
        <p class="text-start">
          <i class="fa-solid fa-trophy separa"> </i
          ><span class="blue separa"> Mercado Puntos</span>Sumas
          {{ puntos }} puntos.
        </p>
        <p class="text-start">
          <i class="fa-solid fa-medal separa"> </i>{{ años }}años de garantia de
          fabrica
        </p>
      </div>
    </div>
  </div>
</template>














<script>
import axios from "axios";
import info from "../json/ProductoView.json";
const inicio = "http://localhost/";

export default {
  data: function () {
    return {
      //images
      img1: inicio + "caja.webp",
      img2: inicio + "xbox1.webp",
      img3: inicio + "xbox2.webp",
      libre: inicio + "m-libre.png",
      //---------------------------------//
      nuevo: info.nuevo,
      vendidos: info.vendidos,
      reseñas: info.reseñas,
      nombre: info.nombre,
      price: info.price,
      meses: info.meses,
      abono: info.abono,
      caracteristicas: info.caracteristicas,
      productos1: info.productos1,
      productos2: info.productos2,
      oferta: info.oferta,
      entrega: info.entrega,
      full: info.full,
      llegada: info.llegada,
      vendedor: info.vendedor,
      ventas: info.ventas,
      disponibilidad: info.disponibilidad,
      garantiaDias: info.garantiaDias,
      garantiaTiempo: info.garantiaTiempo,
      años: info.años,
      puntos: info.puntos,
      imgs: info.imgs,
    };
  },
  methods: {
    carga: function () {
      axios.get("http://localhost:8080/pro/muebles", {}).then((response) => {
        console.log(response.data);
        this.mensaje4 = response.data;
      });
    },
    cambia: function () {
      this.mensaje3 = "hola mundo";
    },
  }, // aqui concluyen los métodos
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.star {
  color: #3483fa;
  margin: 3px;
}

.verde {
  color: #0fb45f;
}

.blue {
  color: #2968c8;
  font-weight: bold;
  cursor: pointer;
}

.separa {
  margin-right: 5px;
}

.carac {
  line-height: 15px;
}

.entrega {
  margin-left: 50px;
}

.crece {
  padding-top: 10px;
  padding-bottom: 10px;
}

.addToCar {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #d9e7fa;
}

.container-3 {
  border: 2px solid #cfcbcb;
  border-radius: 10px;
}

.libre {
  width: 100%;
}
</style>
