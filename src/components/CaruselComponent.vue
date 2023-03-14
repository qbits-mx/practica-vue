<template>
<div id="carouselExampleIndicators" class="carousel slide carousel-fade ancho" data-bs-ride="carousel">
<!-- Slides -->
<div class="carousel-inner mb-5">
  <div class="carousel-item active">
    <img :src=inicio2+img1 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img2 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img3 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img4 class="d-block w-100 alto" alt="..." />
  </div>
  <div class="carousel-item">
    <img :src=inicio2+img5 class="d-block w-100 alto" alt="..." />
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
<div class="carousel-indicators" style="margin-bottom: -20px;">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
    aria-current="true" aria-label="Slide 1" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img1 />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
    aria-label="Slide 2" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img2  />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
    aria-label="Slide 3" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img3 />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
    aria-label="Slide 3" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img4 />
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
    aria-label="Slide 3" style="width: 100px;">
    <img class="d-block w-100 img-fluid" :src=inicio2+img5 />
  </button>
</div>
</div>
</template>

<script>
export default {
    props: ['inicio2, img1,img2,img3,img4,1mg5'],
    methods: {
        inicio2: inicio2,
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            img5: img5
    },
}
</script>


<style></style>
