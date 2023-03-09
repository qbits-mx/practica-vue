<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-lg  amarella d-flex justify-content-around">
          <div class="d-flex">
            <a class="navbar-brand" href="#"><img :src=img1 alt="hola" class="logo1"></a>
            <form class="d-flex align-items-center">
              <input class="form-control me-2 logo1 largo1" type="search" placeholder="" aria-label="Search">
              <button class="btn btn-outline-success logo1 mx-2" type="submit">Buscar</button>
            </form>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active mx-2" aria-current="page" href="#"><img :src=img2 alt="hola" class="logo1 img-fluid"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img :src=img3 alt="hola" class="logo1 img-fluid"></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg amarella d-flex justify-content-around p-0">
          <div class="d-flex p-0">
            <a class="navbar-brand d-flex align-items-center" href="#"><img :src=img4 alt="hola"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav d-flex align-items-center justify-content-around">
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" aria-current="page" href="#">Categorias</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" aria-current="page" href="#">Ofertas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" aria-current="page" href="#">Historial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" aria-current="page" href="#">Supermercado</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" href="#">Moda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" href="#">Vender</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3 p-0" href="#">Ayuda</a>
                </li>
              </ul>
              <ul class="navbar-nav d-flex align-items-center justify-content-around mx-3">
                <li class="nav-item">
                  <a class="nav-link mx-2 p-0" href="#">Usuario</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2 p-0" href="#">Mis compras</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2 p-0" href="#">Favoritos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <div class="display-10 mt-3 body1 mx-auto">
          <p class="texts">También te puede interesar: <span>laptop chuwi - macbook pro 2017 - laptop Gamer - chrome book - laptop precios</span></p>
        </div>
        <div class="display-10 mt-3 body1 mx-auto">
          <p class="texts">Volver al listado: <span class="linksurl">| Computacion > laptops y accesorios > laptops</span></p>
        </div>
        <div class="container ">
          <div class="row ">
            <div class="col d-flex align-items-center">
              <!-- Carousel wrapper -->
              <div id="carouselMDExample" class="carousel slide carousel-fade" data-bs-interval="false">
                <!-- Slides -->
                <div class="carousel-inner mb-5 shadow-1-strong rounded-3">
                  <div :class=selecciona(index) v-for="(elemento,index) in dimg" v-bind:key="index">
                    <img :src=elemento class="d-block w-100" alt="..." />
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
                    <img :src=dimg[index] class="d-block w-100 shadow-1-strong rounded img-fluid"/>
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
                <i class="bi bi-star-fill mx-1" style="color: cornflowerblue;"></i>
                <i class="bi bi-star-half mx-1" style="color: cornflowerblue;"></i>
                <span class="linksurl">{{ totalStars }}</span>
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
                <span class="linksurl">Ver caracteristicas</span>
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
      </body>
    </div>
</template>

<script>
import axios from 'axios';
const  inicio =  'http://127.0.0.1/';

export default {
    data: function () {
        return {
            nombre: 'Pantalla JVC SI32H LCD HD 32" 110V/240V',
            totalStars: '   (1500)',
            vendidas: '202',
            precio: '2,916',
            mensualidad: '976',
            minutos: '525',
            direccion: 'Jiutepec Morelos',
            numVentas: '+5mil',
            totalProd: '34',
            unidades: '2',
            tienda: 'Golingo',
            caracteristicas: ["Su resolucion hd", 
                              "Manejalo con la voz", 
                              "conecta tus dispositivos", 
                              "Dimensiones", 
                              "Entretenimiento"],
            totalVentas: '+1000',
            meses: '3',
            especDia: 'Domingo',
            caruselActivo: "carousel-item active",
            caruselInactivo: "carousel-item",

            img: [inicio + 'merca04.png', inicio + 'merca02.png', inicio + 'merca03.png', inicio + '05.png'],
            dimg: [inicio + 'D-1.jpg', 
                    inicio + 'D-2.jpg', 
                    inicio + 'D-3.jpg', 
                    inicio + 'D-4.jpg', 
                    inicio + 'D-5.jpg', 
                    inicio + 'D-5.jpg',
                    inicio + 'D-5.jpg',
                    inicio + 'D-5.jpg',
                    inicio + 'D-5.jpg',
                    inicio + 'D-5.jpg',
                    inicio + 'D-5.jpg'
                  ],
            
            /*img1: inicio + 'merca04.png',
            img2: inicio + 'merca02.png',
            img3: inicio + 'merca03.png',
            img4: inicio + '05.png',
            dimg1: inicio + 'D-1.jpg',
            dimg2: inicio + 'D-2.jpg',
            dimg3: inicio + 'D-3.jpg',
            dimg4: inicio + 'D-4.jpg',
            dimg5: inicio + 'D-5.jpg'*/
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

        selecciona: function(indice) {
          if(indice == 0){
            return this.caruselActivo;
          }else{
            return this.caruselInactivo;
          }
        }

    } // aqui concluyen los métodos
}
</script>

<style scoped>
@import '~mdb-ui-kit/css/mdb.min.css';

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