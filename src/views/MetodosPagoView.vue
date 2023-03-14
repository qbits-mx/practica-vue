<template>
  <div>
    <!--navbar-->
    <nav class="nav d-flex justify-content-around align-content-center">
      <div>
        <img :src="libre" alt="" class="logo" />
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
              <TarjetaComponent/>
            <h6 class="text-start my-5">Con otras formas de pago</h6>
            <!--component--->
            <div v-for="pago in otras" v-bind:key="pago.id" >
              <div
                class="d-flex justify-content-start align-items-center p-4 b mb-1"
              >
                <input type="radio" name="seleccion" class="fs-3" />
                <div class="div-img mx-3">
                  <img :src="pago.icono" alt="" class="icono" />
                </div>
                <div class="text-start mx-3 align-middle">
                  <div class="d-flex">
                    <p>{{ pago.nombreBanco }} {{ pago.tipoPago }}</p>
                    <p>{{ pago.numeroTarjeta }}</p>
                  </div>
                  <p class="text-secondary">{{ pago.leyenda }}</p>
                </div>
              </div>
            </div>
            <!--component ends--->
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
    <!--footer-->
    <FooterComponent/>
  </div>
</template>

<script>
import axios from "axios";
import info from "../json/MetodosPago.json";
import FooterComponent from "../components/FooterComponent.vue"
import TarjetaComponent from "@/components/TarjetaComponent.vue";
const inicio = "http://localhost/";

export default {
  components: {
    FooterComponent,
    TarjetaComponent
},

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
      otras:info.otrasFormas,
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

.icono {
  width: 100%;
}

.div-img {
  background-color: #eeeeee;
  border-radius: 50%;
  width: 50px;
  box-sizing: border-box;
}
</style>
