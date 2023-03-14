<template>
  <div>
    <!--  navbar  -->
    <HeaderComponent :usuario=usuario :cp=cp />
    <!--  navbar  -->
    <!--  body  -->
    <div class="container-fluid fondo pb-5" >
      <div class="box">
        <div class="d-flex flex-row mb-3">
          <p class="nav-link letra p-2">También puede interesarte:</p>
          <div v-for="interes in data3" v-bind:key="interes.id">
            <a class="nav-link p-2 letras" href="#"> {{ interes.importa }} &nbsp; - </a>
          </div>
        </div>
        <div class="d-flex flex-row abajo pt-4">
          <p class="nav-link p-2 continuar letra">Volver al listado |</p>
          <div v-for="referencias in data4" v-bind:key="referencias.id">
            <a class="nav-link p-2 letra2" href="#"> {{ referencias.referencia }} &nbsp; > </a>
          </div>
        </div>
      </div>
      <div class="container fon2">
        <div class="d-flex flex-row gap-5">
          <!-- Carousel wrapper -->
          <CarouselComponent :imgs=imagenes />
          <!-- Carousel wrapper -->

          <!-- lado B -->

          <div class="lado2" v-for="producto in data2" v-bind:key="producto.id">
            <LadobComponent :producto=producto />
          </div>
          <!-- lado B -->
        </div>

        <div class="pb-5">
          <AbajoComponent :data=data :inicio2=inicio2 />
      </div>
      </div>
    </div>
    <!--  Footer  -->
    <FooterComponent />
    <!--  Footer  -->
  </div>
</template>

<script>


import axios from 'axios';
import info from './LoginView.json';
import FooterComponent from '@/components/FooterComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import LadobComponent from '@/components/LadobComponent.vue';
import AbajoComponent from '@/components/AbajoComponent.vue';
const inicio = 'http://127.0.0.1/'

export default {
  components: {
    FooterComponent,
    CarouselComponent,
    HeaderComponent,
    LadobComponent,
    AbajoComponent,
  },
  data: function () {
    return {
      inicio2: inicio,
      data: info.caracteristicas,
      data2: info.producto,
      data3: info.interes,
      data4: info.referencias,
      data5: info.imagenes,

      interes: info.interes,
      referencias: info.referencias,

      usuario: "juan carlos",
      cp: 12345,

            imagenes: [inicio + 'proteus1.jpg', inicio + 'proteus2.jpg', inicio + 'proteus3.jpg'],
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
    calculaRedondeoStart: function () {
      //toma el valor de CalificacionStars y me redondea en 3 niveles
      //lo que està abajo de n
      return this.calculaRedondeoStart
    },

  } // aqui concluyen los métodos
}
</script>



<style scoped>
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

.lado2 {
  border: 1px solid rgb(0, 0, 0, .1);
  border-radius: 8px;
  font-size: 14px;
  padding: 16px;
  width: 75%;
}

/* Vendedor */
</style>