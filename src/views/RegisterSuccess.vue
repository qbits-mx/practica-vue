<template>
  <div>     
      <v-container class="mx-auto px-8 py-8">    
        <h1>Registro Exitoso</h1>
      </v-container>
      <v-container class="mx-auto px-8 py-8">
        <h2>¡Felicidades!</h2>
      </v-container>
      <v-container class="mx-auto px-8 py-8">        
        <h3>Ahora eres usuario del sistema, dirígete al login e inicia sesión. </h3>      
      </v-container>
      
    
      <v-container  class="mx-auto px-8 py-8 max-width">            
      <v-btn
          :disabled="!valid"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          prepend-icon="fa-sharp fa-solid fa-lock"
          @click="register"
        >
        Enviar</v-btn>
      </v-container>

    <div id="footer">
      &copy; 2021 Este es mi custom footer. Siempre pegado al bottom de la
      página.
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import { useToast } from "vue-toastification";

export default {
  setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
  },  
  data: function () {
    return {
      valid: true,
      show1: false,
      token: "",            
      msgErr: "",
      version: process.env.VUE_APP_VERSION,
      pwVisible: false,            
      userRules: [
        (v) => !!v || "Usuario requerido",
        (v) => /.+@.+\..+/.test(v) || "Debe ser un email valido",
      ],
    };
  },
  methods: {
    
    openRegistroPage: function () {
      router.push({ name: "registro" });
    },
    openForgotPage: function () {
      router.push({ name: "regenera-clave" });
    },
    register: function () {
      axios
      .get("https://access.qbits.mx/api/register-confirm", { params: {  token: this.token } })          
        .then((response) => {
          response.data;                   
          router.push("/ui/login");
        })
        .catch((error) => {
          
          // el catch ocurre aun si el post está bien pero ud es null, por ejemplo !!!!
          this.msgErr = error;
          if (error.response) {
            this.msgErr = error.response.data["exceptionLongDescription"];
            this.errorAlert(this.msgErr)
          }
        });
    },
    errorAlert(error) {      
      this.toast.error(error, {
        position: "bottom-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  background-color: #fff;
}
#app {
  position: relative;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 1px;
}
#contenedor {
  width: 100%;
  background-color: transparent;
  padding-bottom: 60px;
  padding-top: 0px;
}
.centra {
  margin: auto;
  padding: 20px;
}
.loader {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-image: url("@/assets/wait.gif");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
.card-custom-header {
  color: #fff;
  text-align: center;
  background-color: #363636;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Global Style for input text validation process */
.msgValidClass {
  display: none;
}
.msgNotValidClass {
  color: rgb(213, 95, 95);
}
.input-base {
  padding-left: 10px;
  padding-right: 35px;
  display: block;
  box-sizing: border-box;
  margin-bottom: 4px;
  font-size: 13px;
  line-height: 2;
  font-family: inherit;
  transition: 0.5s;
  border: 0;
}
.input-correct {
  background-color: #ffffff;
  border-bottom: 1px solid #009900;
  background: url(@/assets/check.png) no-repeat scroll;
  background-position: right;
  background-size: 17px;
  background-position-x: 96%;
}
.input-wrong {
  background-color: #ffffff;
  border-bottom: 1px solid #990000;
  background: url(@/assets/danger.jpg) no-repeat scroll;
  background-position: right;
  background-size: 17px;
  background-position-x: 96%;
}
.input-correct:focus {
  box-shadow: 2px 1px 4px #d2eac1;
  border: 1px solid rgb(183, 232, 170);
}
.input-wrong:focus {
  box-shadow: 2px 1px 4px #ffbbaa;
  border: 1px solid #bb0000;
}
.styleCalendar {
  font-size: 12px;
  border: 0;
  border-bottom: 1px solid #009900;
}

.a2 {
  color: #000;
}
.a2:hover {
  color: #00f;
}
.ancho {
  max-width: 100%;
}
.centra {
  margin: auto;
  padding-top: 10%;
}
.errspan {
  left: 29px;
  margin-top: 11px;
  position: absolute;
  z-index: 2;
  color: #000;
}
#text-usr {
  padding-left: 33px;
  padding-top: 11px;
}
#password {
  padding-left: 33px;
  padding-top: 10px;
  padding-right: 37px;
}
.put-right {
  position: absolute;
  right: 28px;
  margin-top: 9px;
  z-index: 2;
}
#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  height: 40px;
  background: #444;
  color: #fff;
  text-align: right;
}

.max-width{
  max-width: 600px;
}
</style>