<template>
  <div>
    <div class="muebles">
      <h1 style="color: #f9ca24">Login View</h1>

      <div class="glitch-wrapper">
        <div
          @click="carga"
          data-glitch="Kixzeit"
          class="glitch"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Kixzeit
        </div>
      </div>

      <!--<table border="2" style="width: 70%">
      <tr
        v-for="parte in mensaje4"
        v-bind:key="parte.id"
        style="background-color: crimson"
        class="collapse collapse-horizontal"
        id="collapseWidthExample"
      >
        <td>{{ parte.id }}</td>
        <td>{{ parte.nombre }}</td>
        <td>{{ parte.color }}</td>
        <td>{{ parte.precio }}</td>
        <td>{{ parte.agotado }}</td>
      </tr>
    </table>-->

      <table
        class="table table-dark table-striped"
        border="2"
        style="width: 70%"
      >
        <tr
          v-for="parte in mensaje4"
          v-bind:key="parte.id"
          style="background-color: #f9ca24; color: black; font-weight: bold"
          class="collapse collapse-horizontal"
          id="collapseWidthExample"
        >
          <td>{{ parte.id }}</td>
          <td>{{ parte.nombre }}</td>
          <td>{{ parte.color }}</td>
          <td>{{ parte.precio }}</td>
          <td>{{ parte.agotado }}</td>
        </tr>
      </table>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner M-3">
        <div class="carousel-item active">
          <img
            src="https://linuxhint.com/wp-content/uploads/2018/03/Skyline-1.jpg"
            class="d-block w-50 m-auto m-2 rounded-3"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://linuxhint.com/wp-content/uploads/2018/03/Earth-Horizon-1.jpg"
            class="d-block w-50 m-auto m-2 rounded-3"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://linuxhint.com/wp-content/uploads/2018/03/roads-untraveled.jpg"
            class="d-block w-50 m-auto m-2 rounded-3"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      mensaje: "Hola mundo",
      mensaje2: "Hola mundo 2",
      mensaje3: "Hola mundo 3",
      mensaje4: "Hola mundo 4",
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
body {
  background-color: #4834d4;
}

td {
  height: 20px;
}

.muebles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.glitch-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.glitch {
  position: relative;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.2;
  color: #eb4d4b;
  letter-spacing: 5px;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    infinite;
  color: rgb(250, 75, 6);
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #130f40;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}
</style>
