<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";
import info from "./LoginView.json";
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
      })
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

</style>