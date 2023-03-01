<template>
  <div>
    <nav>
      <h1>Registro de usuario</h1>
    </nav>
    <v-container  class="mx-auto px-8 py-8 max-width">
      <v-form v-model="valid" lazy-validation @submit.prevent="register">
        <v-text-field
          v-model="usr"          
          :rules="userRules"
          class="mb-2"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="nick"          
          :rules="nickRules"
          class="mb-2"
          label="Nick"
          required
        ></v-text-field>

        <v-text-field
          v-model="claveHash"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          :rules="passRules"
          required
          class="mb-2"
          name="Contraseña"
          label="Contraseña"
          hint="Debe contener minimo 8 carácteres"
          counter
          @click:append-inner="show1 = !show1"
        ></v-text-field>

        <h2>{{ msgErr }}</h2>       
        <v-row align="center" justify="center" class="mx-auto px-8 py-8">
                  <vue-recaptcha 
                    id="solvecaptcha"
                    ref="recaptcha"
                    :rules="checkRules"
                    sitekey="6LeypzsdAAAAAD716pR1WaBMWpPCmdYWOjKyPkoM"
                    @expired="onCaptchaExpired"
                    @verify="onCaptchaVerified"
                  />
        </v-row>

        <v-checkbox 
          v-model="mayorEdad"
          :rules="checkRules"
          :label="`Soy mayor de edad`"
        ></v-checkbox>
      

        <v-checkbox v-model="termCond" :rules="checkRules">
          <template v-slot:label>
            <div>
              Acepto los
              <v-tooltip bottom>
                <template v-slot:activator="{ props }">
                  <a class="link" @click.stop @click="dialog = true" v-bind="props">
                    términos
                  </a>
                </template>
                Ver terminos y condiciones
              </v-tooltip>
            </div>
          </template>
        </v-checkbox>

        <v-dialog v-model="dialog" scrollable max-width="600" max-height="600">
          <v-card>
            <v-toolbar>
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Terminos y condiciones</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green-darken-1" text @click="dialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn
          :disabled="!this.captcha || !this.valid"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          prepend-icon="fa-sharp fa-solid fa-lock"          
          
        >
          Enviar
        </v-btn>

        <v-container class="mx-auto px-8 py-8">
          <v-btn color="info" variant="text" href="/ui/login">Login</v-btn>          
        </v-container>

        <v-divider></v-divider>
        <v-container class="mx-auto px-8 py-6">
          <TerminosCondicionesView></TerminosCondicionesView>
        </v-container>
      </v-form>
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
import { traduce } from "@/store/traductor.js";
import TerminosCondicionesView from "@/views/TerminosCondicionesView";
import { VueRecaptcha } from "vue-recaptcha";

const HTTP_STATUS = {
  OK: 200,
  FORBIDDEN: 403,
};

export default {
  components: {
    VueRecaptcha,
    TerminosCondicionesView,
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    // Make it available inside methods
    return { toast };
  },
  data: function () {
    return {
      mayorEdad: false,
      termCond: false,
      valid: true,
      show1: false,
      usr: "",
      nick: "",
      claveHash: "",
      msgErr: "",
      version: process.env.VUE_APP_VERSION,
      pwVisible: false,
      captcha: false,
      dialog: false,
      userRules: [
        (v) => !!v || "Usuario requerido",
        (v) => /.+@.+\..+/.test(v) || "Debe ser un email valido",
      ],
      passRules: [
        (v) => !!v || "Contraseña requerido",
        (v) => v.length >= 8 || "Min 8 carácteres",
      ],
      nickRules: [(v) => !!v || ""],
      checkRules: [(v) => !!v || ""],
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
      if (this.captcha) {
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
            var err = error.response;
            traduce(err)
              .then((result) => {
                if (error.response) {                  
                  this.errorAlert(result);
                }
              })
              .catch((err) => {
                err;
              });
          });
      }
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
    oculta() {
      this.pwVisible = !this.pwVisible;
      this.pwInputValue = this.pwVisible ? "text" : "password";
    },
    onCaptchaVerified(recaptchaToken) {
      this.captcha = false;
      axios
        .post("https://access.qbits.mx/api/check-captcha", {
          response: recaptchaToken,
          ip: "127.0.0.1",
        })
        .then((response) => {
          if (response.status === HTTP_STATUS.OK) {
            this.captcha = true;
          } else {
            this.msgErr = "Regreso con un estatus: " + response.status;
          }
        })
        .catch((error) => {
          console.log(error.data);
          this.msgErr = "Ha ocurrido un error de red: " + error;
        })
        .finally(() => (this.loading = false));
    },
    onCaptchaExpired() {
      this.captcha = false;
      this.$refs.recaptcha.reset();
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
.child {
  background-color: red;
  /* Center horizontally*/
  margin: auto;
  text-align: center;
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
.link {
  color: blue;
}
.max-width{
  max-width: 600px;
}
</style>