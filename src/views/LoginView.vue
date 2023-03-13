<template>
    <div>
      <header>
        <HeaderComponent/>
      </header>
      <body>
        <SideBarComponent/>
        <div class="mb-5">
          <div class="display-10 mt-3 body1 mx-auto">
          <p class="texts">También te puede interesar: <span>laptop chuwi - macbook pro 2017 - laptop Gamer - chrome book - laptop precios</span></p>
        </div>
        <div class="display-10 mt-3 body1 mx-auto">
          <p class="texts">Volver al listado: <span class="linksurl">| Computación > laptops y accesorios > laptops</span></p>
        </div>
        <div class="container ">
          <div class="row ">
            <div class="col d-md-flex align-items-center">
              <!-- Carousel wrapper -->
              <div id="carouselMDExample" class="carousel slide carousel-fade" data-bs-interval="false">
                <!-- Slides -->
                <div class="carousel-inner mb-5 shadow-1-strong rounded-3">
                  <div :class=selecciona(index) v-for="(elemento,index) in dimg" v-bind:key="index">
                    <img :src=inicio2+elemento class="d-block w-100" alt="..." />
                  </div>
                </div>
                <!-- Slides -->

                <!-- Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselMDExample"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselMDExample"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                <!-- Controls -->

                <!-- Thumbnails -->
                <div class="carousel-indicators" style="margin-bottom: -20px;">
                  <span v-for="(miniatura,index) in dimg" v-bind:key="index" class="ajusta">
                    <button type="button" data-bs-target="#carouselMDExample" :data-bs-slide-to=index class="active"
                    aria-current="true" aria-label="Slide 1" style="width: auto;">
                    <img :src=inicio2+dimg[index] class="d-block w-100 shadow-1-strong rounded img-fluid"/>
                    </button>
                  </span>
                </div>
                <!-- Thumbnails -->
              </div>
            </div>
            <div class="col texts1">
              <span class="oscuro">Nuevo | {{ totalVentas }}vendidos</span>
              <h5 class="my-2">{{ nombre }}</h5>
              <div>
                <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
                <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
                <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>

                <i class="bi bi-star-half mx-1" style="color: cornflowerblue;"></i>
                
                <i class="bi bi-star mx-1" style="color: cornflowerblue;"></i>
                <i class="bi bi-star mx-1" style="color: cornflowerblue;"></i>

                <span class="linksurl">({{ totalStars }})</span>
                <p>Votantes: {{ votosTotales }}</p>

              </div>
              <div class="my-2 d-flex align-items-center">
                <div class="my-auto">
                  <p class="naranja p-1 my-auto">MÁS VENDIDO</p>
                </div>
                <span class="linksurl mx-3">{{ vendidas }} en Televisores</span>
              </div>
              <div>
                <h3 class="precios m-0">${{ precio }}</h3>
                <p class="m-0">en <span class="verde m-0"><span>{{ meses }}</span>  x $ {{ mensualidad }} sin interés</span></p>
                <p class="my-n1">IVA incluido</p>
              </div>
              <div class="my-3">
                <span class="linksurl">Ver los medios de pago</span>
              </div>
              <div class="mt-5">
                <p>Lo que tienes que saber de este producto</p>
                <ul v-for="(carac,index) in caracteristicas" v-bind:key="index">
                  <li>{{ carac }}</li>
                </ul>
              </div>
              <div class="my-3">
                <span class="linksurl">Ver características</span>
              </div>
              <div class="mt-5">
                <span>Opciones de compra</span>
              </div>
              <div class="my-3">
                <p class="linksurl m-0">9 productos nuevos desde $2,916</p>
                <p class="linksurl m-0">2 productos usados y reacondicionados</p>
              </div>
            </div>
            <div class="col texts1 mt-3 border p-5 rounded">
              <p class="verde mb-2"><i class="bi bi-truck"></i> Llega gratis <span style="font-weight: 600;">{{ especDia }}</span></p>
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
                <p>Cantidad: <strong>{{ unidades }} unidades </strong><span class="oscuro">({{ totalProd }} disponibles)</span></p>
              </div>
              <div>
                <button class="btn btn-primary"> Comprar ahorita</button>
                <button class="btn btn-ligth"> Agregar al carrito</button>
              </div>
              <div class="mt-5">
                <p class="my-4"><span class="linksurl"><i class="bi bi-arrow-90deg-left"></i> Devoluciones gratis.</span> Tienes 30 dias desde que lo recicbes.</p>
                <p class="my-4"><span class="linksurl"><i class="bi bi-shield-plus"></i> Compra Protegida.</span> Recibe el producto que esperabas o te devolvemos el dinero.</p>
                <p class="my-4"><span class="linksurl"><i class="bi bi-trophy-fill"></i> Mercado Puntos.</span> Sumas 153 puntos.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </body>
      <FooterComponent/>
    </div>
</template>

<script>
import axios from 'axios';
import info from './LoginView.json';
import FooterComponent from '../components/FooterComponent'
import SideBarComponent from "@/components/sidebar/SideBarComponent.vue";
import HeaderComponent from '@/components/HeaderComponent.vue';
const  inicio =  'http://127.0.0.1/';

export default {
    components: {
      FooterComponent,
      HeaderComponent,
      SideBarComponent
    },
    data: function () {
        return {
            inicio2: inicio,
            totalStars: info.totalStars,
            caracteristicas: info.caracteristicas,
            nombre: info.nombre,
            vendidas: info.vendidas,
            precio: info.precio,
            mensualidad: info.mensualidad,
            minutos: info.minutos,
            direccion: info.direccion,
            numVentas: info.numVentas,
            totalProd: info.totalProd,
            unidades: info.unidades,
            tienda: info.tienda,
            totalVentas: info.totalVentas,
            meses: info.meses,
            especDia: info.especDia,
            dimg: info.dimg,
            votosTotales: info.votosTotales,

            img1: "merca04.png",
            img2: "merca02.png",
            img3: "merca03.png",
            img4: "05.png",
            caruselActivo: "carousel-item active",
            caruselInactivo: "carousel-item",
            estrellasNegras:3,
            estrellasMedias:1,
            estrellasBlanceas:2
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
        calculaRedondeoStart: function() {
          // toma el valor de calificacionStars y me redondea en 3 niveles:
          // lo que está abajo de n.3 lo deja en n
          // lo que está entre n.3 y n.7 lo deja en n.5
          // lo que está arriba de n.7 lo deja en n+1  
          this.estrellasNegras = 2;
          this.estrellasMedias = 1;
          this.estrellasBlanceas = 3;
        },
        selecciona: function(index) {
          return (index==0)?this.caruselActivo:this.caruselInactivo
        }
    } // aqui concluyen los métodos
}
</script>

<style scoped>


.precios {
  font-size: 2.5rem;
}

.red1{
  color: rgb(170, 48, 11);
}

.verde{
  color: rgb(40, 202, 40);
}
.ancho{
  margin: auto;
  text-align: center;
  width: 400px;
}

.naranja{
  background-color: orange;
  width: fit-content;
  border-radius: 5px;
  color: white;
  font-weight: 600;
}
.amarella{
  background-color: #fff159;
}

.logo1{
  height: 40px;
}

.largo1{
  width: 500px;
}

.body1{
  width: 65%;
}

.texts{
  font-size: .8rem;
  text-align: left;
}

h5{
  font-weight: 600;
  font-size: 1.5rem;
}

.texts1{
  text-align: left;
}

.oscuro{
  font-size: .7rem;
  color: gray;
}

.linksurl{
  color: cornflowerblue;
}

.ajusta{
  overflow: auto;
}

.scroll{
  min-width:388px;
  position: relative;
  margin-top: 0%;
  border-radius: 8px;
  display: flex;
  height: 92px;
  z-index: 1;
  margin-left: 2%;
  object-fit: cover;
}
</style>