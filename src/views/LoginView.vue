<template>
  <div>
    <div>
      <div>
        <img :src="libre" alt="" class="libre" />
        <!--  aqui inicia un comentario -->
        <div class="container text-center">
          <div class="row">
            <div class="col m-3">
              <!-- Carousel wrapper -->
              <div
                id="carouselExampleIndicators"
                class="carousel slide carousel-fade ancho"
                data-bs-ride="carousel"
              >
                <!-- Slides -->
                <div class="carousel-inner mb-5">
                  <div class="carousel-item active">
                    <img :src="img1" class="d-block w-100 alto" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img :src="img2" class="d-block w-100 alto" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img :src="img3" class="d-block w-100 alto" alt="..." />
                  </div>
                </div>
                <!-- Slides -->

                <!-- Controls -->
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
                <!-- Controls -->

                <!-- Thumbnails -->
                <div class="carousel-indicators" style="margin-bottom: -20px">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    style="width: 100px"
                  >
                    <img class="d-block w-100 img-fluid" :src="img1" />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    style="width: 100px"
                  >
                    <img class="d-block w-100 img-fluid" :src="img2" />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    style="width: 100px"
                  >
                    <img class="d-block w-100 img-fluid" :src="img3" />
                  </button>
                </div>
              </div>
              <!-- Carousel wrapper -->
            </div>
            <div class="col m-3">
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
                  <span class="verde"
                    >{{ meses }} x ${{ abono }} sin intereses</span
                  >
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
                      La duración de la batería de los controles depende del uso
                      que se le dé al producto.
                    </li>
                  </ul>
                  <p class="text-start blue">Ver caracteristicas</p>
                </div>
                <div>
                  <p class="mt-1 fs-6 text-start">Opciones de compra:</p>
                  <p class="blue text-start">
                    {{ productos1 }} productos nuevos desde ${{ oferta }}
                  </p>
                  <p class="blue text-start">
                    {{ productos2 }} productos usados y reacondicionados
                  </p>
                </div>
              </div>
            </div>
            <!-- 2 column ends -->
            <div class="col m-3 p-3 container-3">
              <!-- 3 column starts -->
              <div>
                <p class="verde text-start">
                  <i class="fa-solid fa-truck separa"></i> {{ entrega }}
                </p>
                <div class="ml-3 entrega">
                  <p class="text-start">
                    <i class="fa-solid fa-bolt-lightning verde separa"></i>
                    <span class="verde">{{ full }}</span>
                  </p>
                  <p class="text-start">
                    conoce los tiempos y las formas de envio
                  </p>
                  <p class="text-start blue">
                    <i class="fa-solid fa-location-dot mr-2 separa"></i
                    >{{ llegada }}
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
                  <button class="btn btn-primary d-block crece">
                    Comprar ahorita
                  </button>
                  <button class="btn blue addToCar">Agregar al carrito</button>
                </div>
                <div>
                  <p class="text-start">
                    <i class="fa-solid fa-arrow-rotate-left separa"> </i
                    ><span class="blue separa"> Devolucion gratis.</span>Tienes
                    {{ garantiaDias+garantiaTiempo }} desde que lo recibes
                  </p>
                  <p class="text-start">
                    <i class="fa-solid fa-shield-halved separa"> </i
                    ><span class="blue separa"> Compra protegida</span>recibe el
                    producto que esperabas o te devolvemos tu dinero.
                  </p>
                  <p class="text-start">
                    <i class="fa-solid fa-trophy separa"> </i
                    ><span class="blue separa"> Mercado Puntos</span>Sumas
                    {{ puntos }} puntos.
                  </p>
                  <p class="text-start">
                    <i class="fa-solid fa-medal separa"> </i>{{ años }}años de
                    garantia de fabrica
                  </p>
                </div>
              </div>
            </div>
            <!-- 3 column ends -->
          </div>
        </div>
      </div>
      <!--  aqui inicia un comentario -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import info from "../json/LoginView.json";
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
