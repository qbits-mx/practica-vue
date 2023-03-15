<template>
  <div>
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
</template>

<script>
export default {
  props: ['imgs', 'inicio2'],
  methods: {
      selecciona: function (index) {
          return (index == 0) ? this.caruselActivo : this.caruselInactivo
      }
  },
  data() {
      return {
          caruselActivo: "carousel-item active",
          caruselInactivo: "carousel-item",
      }
  }
}
</script>
