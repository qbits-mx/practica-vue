<template>
  <div>
    <!--  navbar  -->
    <nav class="navbar bg-body-tertiary navegador">
      <div class="container-fluid">
        <a href="#"><img src="../assets/mercado-libre-logo.png" class="d-block logo" height="35" alt=""></a>
        <form class="d-flex w-50 p-0" role="search">
          <input class="form-control buscador" type="search" placeholder="Buscar productos, marcas y más..."
            aria-label="Search">
          <button class="form" type="submit">Search</button>
        </form>
        <a href="#"><img src="../assets/disney.png" class="d-block" height="35" alt=""></a>
      </div>
    </nav>

    <div class="nav-menu navegador w-100">
      <ul class="nav-menu-list">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="d-flex p-0" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Categorias
                  </a>
                  <ul class="dropdown-menu bg-dark despliega">
                    <li><a class="dropdown-item text-white fonter" href="#">Vehículos</a></li>
                    <li><a class="dropdown-item text-white fonter" href="#">Supermercado</a></li>
                    <li><a class="dropdown-item text-white fonter" href="#">Tecnología</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ofertas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Historial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Supermercado</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Moda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Vender</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ayuda</a>
                </li>
              </ul>
            </div>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Crea tu cuenta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ingresa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mis compras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg></a>
              </li>
            </ul>
          </div>
        </nav>
      </ul>
    </div>
    <!--  body  -->
    <div class="container-fluid fondo">
      <div class="box">
        <div class="d-flex flex-row mb-3">
          <p class="nav-link letra p-2">También puede interesarte:</p>
          <a class="nav-link p-2 letras" href="#"> {{ importa1 }} - </a>
          <a class="nav-link p-2 letras" href="#"> {{ importa2 }} - </a>
          <a class="nav-link p-2 letras" href="#"> {{ importa3 }} - </a>
          <a class="nav-link p-2 letras" href="#"> {{ importa4 }}</a>
        </div>
        <div class="d-flex flex-row abajo">
          <p class="nav-link p-2 continuar letra">Volver al listado |</p>
          <a class="nav-link p-2 letra2" href="#"> {{ referencia1 }} > </a>
          <a class="nav-link p-2 letra2" href="#"> {{ referencia2 }} > </a>
          <a class="nav-link p-2 letra2" href="#"> {{ referencia3 }} > </a>
        </div>
      </div>

      <div class="container fon2">
        <div class="d-flex flex-row">
          <div>
            <!-- Carousel wrapper -->
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade img-thumbnail ancho"
              data-bs-ride="carousel">
              <!-- Slides -->
              <div class="carousel-inner mb-5 shadow-1-strong rounded-3 ">
                <div :class=selecciona(index) v-for="(elemento, index) in imgs" v-bind:key="index">
                  <img :src=elemento class="d-block w-100" alt="..." />
                </div>
              </div>
              <!-- Slides -->

              <!-- Controls -->
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              <!-- Controls -->

              <!-- Thumbnails -->
              <div class="carousel-indicators " style="margin-bottom: -20px;">
                <span class="ajusta" v-for="(miniatura, index) in imgs" v-bind:key="index">
                  <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to=index class="active"
                    aria-current="true" style="width: 70px;">
                    <img :src=imgs[index] class="d-block w-100 shadow-1-strong img-fluid" />
                  </button>
                </span>
              </div>
              <!-- Thumbnails -->
            </div>
            <div>
              <hr style="color: black;">
            </div>
          </div>
          <!-- Carousel wrapper -->
          <!-- lado B -->
          <div class="lado2">
            <div style="text-align: left;">
              <span>{{ estado1 }}</span>
            </div>
            <div>
              <h1 style="text-align: left; margin-left: 1px; margin-top: 6px;" class="h3">{{ producto1 }}</h1>
            </div>
            <div>
              <div>
                <div style="text-align: left;">
                  <span class="precio">{{ precio1 }}</span>
                </div>
              </div>
              <div style="text-align: left;">
                <p style="color: black; font-size: 20px; margin-bottom: 0;">en {{ meses1 }} x
                  <span class="promo">{{ promo1 }}</span>
                  <span class="promo">
                    <nbsp> </nbsp> {{ interes1 }}
                  </span>
                </p>
                <p style="color: gray; margin-top: 0; font-size: 20px;">IVA Incluido</p>
              </div>
            </div>
            <div>
              <div style="text-align: left;">
                <a class="nav-link letra2" style="font-size: 17px;" href="#"> ver formas de pago </a>
              </div>
            </div>
            <br>
            <div>
              <div>
                <div style="text-align: left;">
                  <span class="promo" style="font-size: 17px;"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                      height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                      <path
                        d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg> Envio gratis a todo el país</span>
                  <br>
                  <span> Conoce los tiempos y las formas de envío.</span>
                  <a class="nav-link letra2" style="font-size: 14px;" href="#"> Calcula cuando llega </a>
                </div>
              </div>
            </div>
            <br>
            <div>
              <div>
                <div style="text-align: left;">
                  <span class="promo" style="font-size: 17px;"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                      height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                      <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>Devolución gratis</span>
                  <br>
                  <span>Tienes {{dia}} {{periodo}} desde que lo recibes.</span>
                  <a class="nav-link letra2" style="font-size: 14px;" href="#"> Conocer más </a>
                </div>
              </div>
            </div>
            <br>
            <br>
            <div>
              <div style="text-align: left;">
                <p style="color: black; font-weight: 600; font-size: 20px;">{{ disponibles1 }}</p>
              </div>
            </div>
            <div class="d-grid gap-3 col-12 mx-auto">
              <button class="btn btn-primary text-white" type="button">Comprar Ahorita</button>
              <button class="btn carrito text-primary" type="button">Agregar al Carrito</button>
            </div>
            <br>
            <br>
            <div>
              <div>
                <div style="text-align: left;">
                  <a class="nav-link letra2" style="font-size: 14px;" href="#"> Compra Protegida, </a>
                  <span>Recibe el producto que esperabas o te devolvemos tu dinero.</span>
                  <br>
                  <a class="nav-link letra2" style="font-size: 14px;" href="#"> Mercado Puntos. </a>
                  <span> Este producto te da: {{ puntos1 }} pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 class="vendedor" style="text-align: left;">Publicaciones del vendedor</h2>
            <div class="card-group tarjetas ">
              <div class="card">
                <img :src=img4 class="card-img-top " alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ nombre1 }}</h5>
                  <ul v-for="(carac1, index) in caracteristicas1" v-bind:key="index"
                    style="text-align: left; list-style: none; line-height: 50%;">
                    <li>{{ carac1 }}</li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <img :src=img5 class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ nombre2 }}</h5>
                  <ul v-for="(carac2, index) in caracteristicas2" v-bind:key="index"
                    style="text-align: left; list-style: none; line-height: 50%;">
                    <li>{{ carac2 }}</li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <img :src=img6 class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ nombre3 }}</h5>
                  <ul v-for="(carac3, index) in caracteristicas3" v-bind:key="index"
                    style="text-align: left; list-style: none; line-height: 50%;">
                    <li>{{ carac3 }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
        <!--<div style="color: black;">
          <ul v-for="(carac, index) in caracteristicas" v-bind:key="index">
            <li>{{ carac }}</li>
          </ul>
        </div>-->
      </div>
    </div>

    <!--    
    <h1>Login View XYZ</h1>
    <h2 @mouseover="cambia">Gustavo</h2>
    <button class="btn btn-danger" @click="carga">Hola</button>

    <h2>{{ mensaje3 }}</h2>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Otra</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="experimento in mensaje4" v-bind:key="experimento.id">
          <td>{{ experimento.id }}</td>
          <td>{{ experimento.nombre }}</td>
          <td>{{ experimento.color }}</td>
          <td>{{ experimento.precio }}</td>
          <td>{{ experimento.agotado }}</td>
        </tr>
      </tbody>
    </table>




-->



  </div>
</template>

<script>


import axios from 'axios';
import info from './LoginView.json';
const inicio = 'http://127.0.0.1/'

export default {
  data: function () {
    return {
      caracteristicas: info.caracteristicas,
      caracteristicas1: info.caracteristicas1,
      caracteristicas2: info.caracteristicas2,
      caracteristicas3: info.caracteristicas3,
      nombre1: info.nombre1,
      nombre2: info.nombre2,
      nombre3: info.nombre3,
      producto1: info.producto1,
      importa1: info.importa1,
      importa2: info.importa2,
      importa3: info.importa3,
      importa4: info.importa3,
      estado1: info.estado1,
      referencia1: info.referencia1,
      referencia2: info.referencia1,
      referencia3: info.referencia1,
      precio1: info.precio,
      meses1: info.meses1,
      promo1: info.promo,
      dia: info.dia,
      periodo: info.periodo,
      interes1: info.interes1,
      disponibles1: info.disponibles1,
      puntos1: info.puntos1,

      caruselActivo: "carousel-item active",
      caruselInactivo: "carousel-item",


      imgs: [inicio + 'proteus1.jpg', inicio + 'proteus2.jpg', inicio + 'proteus3.jpg'],
      /*imags: [inicio + 'proteus4.jpg',inicio + 'proteus5.jpg',inicio + 'proteus6.jpg'],*/
      /*img1: inicio + 'proteus1.jpg',
      img2: inicio + 'proteus2.jpg',
      img3: inicio + 'proteus3.jpg',*/
      img4: inicio + 'proteus4.jpg',
      img5: inicio + 'proteus5.jpg',
      img6: inicio + 'proteus6.jpg',


    }
  },
  methods: {
    carga: function () {
      axios.get('http://localhost:8080/pro/muebles', {
      }).then(response => {
        console.log(response.data)
        this.mensaje4 = response.data;
      })
    },
    cambia: function () {
      this.mensaje3 = 'hola mundo'
    },
    calculaRedondeoStart: function(){
      //toma el valor de CalificacionStars y me redondea en 3 niveles
      //lo que està abajo de n
      return this.calculaRedondeoStart
    },

    selecciona: function (index) {
      return (index == 0) ? this.caruselActivo : this.caruselInactivo
    }

  } // aqui concluyen los métodos
}
</script>



<style scoped>
h2 {
  color: red;
}

.navegador {
  background-color: #fff159;
}

.buscador {
  border-radius: 5px 0 0 5px;
}

.fonter:hover {
  background-color: #3483fa;
}

.logo {
  margin-left: 3rem;
}

.despliega {
  width: 15rem;
}

li {
  font-size: 14px;
}

.segundo {
  margin-left: 25%;
}

/*body*/
.fondo {
  background-color: rgb(238, 235, 235);
  margin-top: -20px;
  padding: 0 5rem 0rem 5rem;
}

.box {
  text-align: left;
}

.letra {
  font-size: 13px;
  font-weight: 200;
  color: black;
}

.letras {
  font-size: 13px;
  font-weight: 100;
  color: rgb(53, 53, 53);
}

.letra2 {
  color: #3483fa;
  font-size: 13px;
  font-weight: 100;
}

.continuar {
  font-size: 12px;
  color: gray;
}

.fon2 {
  background-color: white;
  padding-top: 2rem;
  padding-left: 2rem;
}

.abajo {
  margin-top: -2rem;
}

.ancho {
  width: 75%;
  margin-right: 5rem;
  margin-bottom: 65px;
  height: 80%;
}

.lado2 {
  border: 1px solid rgb(0, 0, 0, .1);
  border-radius: 8px;
  font-size: 14px;
  padding: 16px;
  width: 75%;
}

span {
  color: rgb(0, 0, 0, .55);
}

.precio {
  font-size: 36px;
  color: black;
}

.promo {
  color: green;
  font-size: 25px;
}

.h3 {
  color: black;
  font-size: 22px;
}

.carrito {
  background-color: rgba(65, 137, 230, .15);
}

/* Vendedor */
.vendedor {
  font-size: 24px;
  color: rgba(0, 0, 0, .9);
  font-weight: 400;
  margin: 0;
}

.tarjetas {
  width: 60%;
  text-align: center;

}

.card {
  margin-top: 2rem;
  color: black;
  border: 1px solid gray;
}

.ajusta {
  overflow: auto;
}</style>
