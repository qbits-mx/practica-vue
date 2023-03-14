<template>
  <div>
    <img :src="libre" alt="" class="libre mb-5" />
    <div class="container text-center mt-5">
      <div class="row">
        <div class="col">
          <CarruselComponent :arregloDeImagenes=imagenes />
        </div>
        <div class="col">
          <DetallesComponent/>
        </div>
        <div class="col rounded border">
          <CompraComponent/>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import axios from "axios";
import info from "../json/ProductoView.json";
import FooterComponent from "@/components/FooterComponent.vue";
import CarruselComponent from "@/components/CarruselComponent";
import DetallesComponent from "@/components/DetallesComponent";
import CompraComponent from "@/components/CompraComponent";
const inicio = "http://localhost/";

export default {
  components: {
    FooterComponent,
    CarruselComponent,
    DetallesComponent,
    CompraComponent,
  },
  data: function () {
    return {
      //images
      libre: inicio + "m-libre.png",
      //---------------------------------//
      imagenes: info.imagenes,
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
