<template>
    <div class="col d-md-flex align-items-center">
        <!-- Carousel wrapper -->
        <div id="carouselMDExample" class="carousel slide carousel-fade" data-bs-interval="false">
        <!-- Slides -->
        <div class="carousel-inner mb-5 shadow-1-strong rounded-3">
            <div :class=selecciona(index) v-for="(elemento,index) in dimg" v-bind:key="index">
            <img :src=baseUrl+elemento class="d-block w-100" alt="..." />
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
            <img :src=baseUrl+dimg[index] class="d-block w-100 shadow-1-strong rounded img-fluid"/>
            </button>
            </span>
        </div>
        <!-- Thumbnails -->
        </div>
    </div>
</template>

<script>
  export default {
    props: ['dimg', 'baseUrl'],
    name: "CarouselComponent",
    data() {
        return {
            caruselActivo: "carousel-item active",
            caruselInactivo: "carousel-item",
        }
    },
    methods: {
        selecciona: function(index) {
            return (index==0)?this.caruselActivo:this.caruselInactivo
        }
    }
  };
</script>