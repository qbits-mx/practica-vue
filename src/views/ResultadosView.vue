<template>
  <div>
    <div>
      <!--  navbar  -->
      <HeaderComponent :usuario=persona :cp=cp />
      <!--  navbar  -->
      <!-- body -->
      <main class="fondo">
        <!-- cabecera body -->
        <div>
          <CabbodComponent :producto=producto :cantidadpro=cantidadpro :ordenar=ordenar />
        </div>
        <!-- cabecera body -->
        <!-- body2 -->
        <div>
          <div class="d-flex">
            <!-- cajas -->
            <form style="width: 30%;">
              <div style="padding: 2rem;">
                <div>
                  <!--cajas2-->
                  <Caja2Component :preciodesde=preciodesde />
                  <!--cajas2-->
                  <!--tiendas-->
                  <TiendasComponent :data3=data3 :data2=data2 :data5=data5 :data4=data4 />
                  <!--tiendas-->
                </div>
              </div>
            </form>
            <!-- cajas -->
            <!--card-->
            <form style="width: 70%; ;">
              <ProductComponent :data=data :inicio2=inicio2 />
            </form>
            <!--card-->
          </div>
        </div>
        <!-- body2 -->
      </main>
      <!-- body -->
    </div>
  </div>
  <!-- footer -->
  <FooterComponent />
  <!-- footer -->
</template>
  
<script>


import axios from 'axios';
import info from './ResultadosView.json';
import datosCliente from './DatosCliente.json';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CabbodComponent from '@/components/CabbodComponent.vue';
import Caja2Component from '@/components/Caja2Component.vue';
import TiendasComponent from '@/components/TiendasComponent.vue';
import ProductComponent from '@/components/ProductComponent.vue';
const inicio = 'http://127.0.0.1/'

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    CabbodComponent,
    Caja2Component,
    TiendasComponent,
    ProductComponent,
  },
  data: function () {
    return {
      inicio2: inicio,
      persona: datosCliente.usuario,
      cp: datosCliente.cp,
      producto: info.producto,
      cantidadpro: info.cantidadpro,
      preciodesde: info.preciodesde,

      ccategorias10: info.ccategorias10,
      ordenar: info.ordenar,

      data: info.productos,
      data2: info.Categorias,
      data3: info.tiendas,
      data4: info.entregas,
      data5: info.costos,


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

    selecciona: function (index) {
      return (index == 0) ? this.caruselActivo : this.caruselInactivo
    }

  } // aqui concluyen los métodos
}
</script>
  
  
  
<style scoped>
</style>
  