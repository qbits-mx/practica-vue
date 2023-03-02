<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn flat variant="plain"  v-bind="props">Consulte los terminos y condiciones</v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="#E0E0E0"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Terminos y condiciones</v-toolbar-title>                   
        </v-toolbar>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>         
          <v-btn
            color="green-darken-1"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>   
      </v-card>
    </v-dialog>
  </v-row>
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
      usr: "",
      nick: "",
      claveHash:"",
      msgErr: "",
      version: process.env.VUE_APP_VERSION,
      pwVisible: false,            
      dialog: false,
        notifications: false,
        sound: true,
        widgets: false, 
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
        .post("https://access.qbits.mx/api/register-request", {
          correo: this.usr,
          nick: this.nick,
          claveHash: this.claveHash,
        })
        .then((response) => {
          response.data;                   
          router.push("/ui/registerconfirm");
        })
        .catch((error) => {
          console.log(error);
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
        position: "top-right",
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
    oculta() {
      this.pwVisible = !this.pwVisible;
      this.pwInputValue = this.pwVisible ? "text" : "password";
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
#checkboxLabel {
   color: blue;
   font-size: 16px;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>