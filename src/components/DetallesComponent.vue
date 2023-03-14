<template>
  <!-- 2 column starts -->
  <div>
    <div class="d-flex mt-2 justify-content-between">
      <p>Nuevo | +{{ vendidos }} vendidos</p>
      <i class="fa-regular fa-heart blue fs-4"></i>
    </div>
    <h4 class="text-start">{{ nombre }}</h4>
    <div class="text-start">
      <i class="fa-solid fa-star blue"></i>
      <i class="fa-solid fa-star blue"></i>
      <i class="fa-solid fa-star blue"></i>
      <i class="fa-solid fa-star blue"></i>
      <i class="fa-solid fa-star blue"></i>
      <span class="blue">({{ reseñas }})</span>
    </div>
    <p class="fs-3 text-start">${{ price }}</p>
    <p class="text-start">
      en
      <span class="verde">{{ meses }} x ${{ abono }} sin intereses</span>
    </p>
    <p class="text-start">IVA incluido</p>
    <p class="blue">Ver los medios de pago</p>

    <div>
      <h6 class="bold">Lo que tienes que saber de este producto</h6>
      <ul
        v-for="(carac, index) in caracteristicas"
        v-bind:key="index"
        class="carac"
      >
        <li class="text-start">{{ carac }}</li>
      </ul>

      <ul>
        <li class="text-start">Incluye control.</li>
        <li class="text-start">Resolución de 3840 px x 2160 px.</li>
        <li class="text-start">Horas de diversión garantizada.</li>
        <li class="text-start">
          Cuenta con: 1 cable hdmi, 1 halo infinite controller.
        </li>
        <li class="text-start">
          La duración de la batería de los controles depende del uso que se le
          dé al producto.
        </li>
      </ul>
      <p class="text-start blue">Ver caracteristicas</p>
    </div>
    <div>
      <p class="mt-1 fs-6 text-start">Opciones de compra:</p>
      <p class="blue text-start">
        {{ productosNuevos }} productos nuevos desde ${{ oferta }}
      </p>
      <p class="blue text-start">
        {{ productosUsados }} productos usados y reacondicionados
      </p>
    </div>
  </div>
  <!-- 2 column ends -->
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
