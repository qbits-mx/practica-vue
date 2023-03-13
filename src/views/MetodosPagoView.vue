<template>
  <div>
    <!--navbar-->
    <nav class="nav d-flex justify-content-around align-content-center">
      <div>
        <img :src="libre" alt="" class="logo mp" />
      </div>
      <span class="ayuda">Ayuda</span>
    </nav>
    <!--navbar-->
    <div class="fondo">
      <div class="main container text-center">
        <div class="row">
          <div class="col-8">
            <div class="text-start my-3">
              <h4>¿como quieres pagar?</h4>
              <div class="mt-3">
                <span>Con Mercado Pago</span>
                <img :src="pago" alt="" class="mp mx-3" />
              </div>
            </div>

            <div v-for="pago in data" v-bind:key="pago.id">
              <div
                class="d-flex justify-content-start align-items-center p-4 b mb-1"
              >
                <input type="radio" name="seleccion" class="fs-3" />
                <div class="div-img">
                  <img :src="pago.icono" alt="" class="mp mx-3 align-middle" />
                </div>
                <div class="text-start mx-3 align-middle">
                  <div class="d-flex">
                    <p>{{ pago.nombreBanco }} {{ pago.tipoPago }}</p>
                    <p>{{ pago.numeroTarjeta }}</p>
                  </div>
                  <p>{{ pago.leyenda }}</p>
                </div>
              </div>
            </div>
          </div>
          <!--col 1 ends-->
          <div class="col-4 px-4 bordeAbajo mb-3">
            <div class="px-1 b main">
              <h6 class="pt-5 mx-3 text-start bordeAbajo">Resumen de compra</h6>
              <div class="py-3">
                <div class="mx-3 d-flex justify-content-between">
                  <span>productos({{ cantidadProducto }})</span>
                  <span>$ {{ totalProductos }}</span>
                </div>
                <div
                  class="mx-3 d-flex justify-content-between bordeAbajo pb-3"
                >
                  <span>Envio</span>
                  <span>$ {{ costoEnvio }}</span>
                </div>
              </div>
              <div class="mx-3 d-flex justify-content-between">
                <span>Pagas</span>
                <span>$ {{ totalPago }}</span>
              </div>
              <!------------------------------------------------->
              <section class="drop">
                <div class="dropdown-center mt-5">
                  <button
                    class="btn btn-white dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ticket"></i>
                    Ingresar un cupon de descuento
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">10%</a></li>
                    <li><a class="dropdown-item" href="#">30%</a></li>
                    <li><a class="dropdown-item" href="#">50%</a></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="p-5">
      <div class="d-flex justify-content-center">
        <span class="px-3">Trabaja con nosotros</span>
        <span class="px-3">Términos y condiciones</span>
        <span class="px-3">Cómo cuidamos tu privacidad</span
        ><span class="px-3">Accesibilidad Ayuda</span>
      </div>
      <p class="text-secondary">
        Copyright © 1999-2023 El presente canal de instrucción o ambiente, es
        operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo
        la marca comercial "Mercado Libre".
      </p>
      <p class="text-secondary">
        Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito
        Juarez, 03940 Ciudad de México, CDMX, Mexico
      </p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import info from "../json/MetodosPago.json";
const inicio = "http://localhost/";

export default {
  data: function () {
    return {
      //images
      libre: inicio + "m-logo.jpg",
      pago: inicio + "pago.png",
      sivale: inicio + "sivale.webp",
      master: inicio + "master.png",
      visa: inicio + "visa.png",

      //---------------------------------//
      nombreBanco: info.nombreBanco,
      tipoTarjeta: info.tipoTarjeta,
      meses: info.meses,
      numeroTarjeta: info.numeroTarjeta,
      nuevaTarjeta: info.nuevaTarjeta,
      intereses: info.intereses,
      formaPago: info.formaPago,
      tiendasParticipantes: info.tiendasParticipantes,
      cantidadProducto: info.cantidadProducto,
      totalProductos: info.totalProductos,
      costoEnvio: info.costoEnvio,
      totalPago: info.totalPago,
      cupon: info.cupon,

      data: info.renglones,
    };
  },
  methods: {
    carga: function () {
      axios.get("http://localhost:8080/pro/muebles", {}).then((response) => {
        console.log(response.data);
        this.mensaje4 = response.data;
      });
    },
  }, // aqui concluyen los métodos
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}

.nav {
  background-color: #fee600;
  height: 50px;
}

.logo {
  width: 100px;
  margin-left: -450px;
}

.ayuda {
  margin-right: -350px;
}

.fondo {
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
}

.mp {
  width: 50px;
}

.main {
  height: 100%;
  width: 100%;
}

.w {
  outline: red solid 1px;
}

.w2 {
  outline: green solid 1px;
}

.w3 {
  outline: blue solid 1px;
}

.b {
  background-color: #fff;
}

.bordeAbajo {
  border-bottom: 2px solid #eeeeee;
}

.drop {
  border-radius: 2px solid #eeeeee;
}

.verde {
  color: darkgreen;
}
</style>
