<template>
  <div class="fondo">
    <div class="ancho centra">

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">Regeneración de clave</div>
            <div class="card-body align">
              <div class="row" >
                <img :src="require(`../assets/logo-big.png`)" class="logo" />
              </div>
                <small>Un token fue enviado a tu correo electrónico. 
                  Por favor introdúcelo y a continuación ingresa tu nueva clave. 
                  El token expirará en 5 minutos a partir de su emisión.</small>
                <br/><br/>
                <div>
                  <div class="col-sm-4" style="text-align: left;">
                    <label>Token:</label>
                  </div>
                  <div class = "col form-group">
                    <div class="row px-3">
                      <input type="text" class="form-control caja icon-key" id="token" maxlength="24" placeholder="XXXXXX" v-model="token"/>
                    </div>
                  </div>
                </div>
                <div class ="form-group form-row">
                  <div class="col-sm-4" style="text-align: left;">
                    <label for="clave">Clave nueva:</label>
                  </div>
                  <div class = "col form-group">
                    <div class="row px-3">
                      <input :type=pwInputValue class="form-control caja icon-lock"  placeholder="contraseña" v-model="password">
                    </div>

                    <div class="row px-3">
                      <a href="#" @click="oculta" class="a3">
                          <i :class="[pwVisible ? 'fas fa-eye-slash' : 'fas fa-eye']"></i>
                      </a>
                    </div>

                    <!--varificacion dinamica de clave-->
                    <div class="col">
                      <small id="clave" class="form-text text-muted oculta">
                        <b>La clave debe contener:</b>
                        <ul>
                          <li :style="styleCarac">8 carateres como mínimo</li>
                          <li :style="styleUpper">Una mayúscula</li>
                          <li :style="styleNum">Un número</li>
                          <li :style="styleSpecial">Un caracte especial, como _, -, #, etc.</li>
                        </ul>
                      </small>
                    </div>
                  </div>
                </div>

              <div class="form-group row text-center">
                <div class="col text-center">
                  <button :disabled="validaDatos" class="btn btn-success" @click="cambiaClave">Cambiar mi clave</button>
                </div>
                <div class="col">
                  <button class="btn btn-warning" @click="goLogin">Ir a Login</button>
                </div>
              </div>

            </div>
          </div> 

        </div>
      </div>
      
      <!-- Modal -->
      <AvisoWindow
        ref='avisoWindow'
        ancho='360'
        :avisoTitulo=modalTitulo
        :avisoMsg=modalMessage
        target='/ui/login'/>

    </div>
    <div id="footer">&copy; 2023 Front V. {{ version }} Qbits.mx</div>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router';
  import { useToast } from "vue-toastification";
  import AvisoWindow from '../components/AvisoWindow'
  import { traduce } from "@/store/traductor.js";

  const passRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  const regularExpression = new RegExp(/[&\\#, +(\-\\_)$~%.'":*?<>{}]/g);

  export default {
    setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
    },  
    components: {
      'AvisoWindow': AvisoWindow
    },
    watch:{
      password(value) {
        this.classPasswd = "not-ok";
        if (passRegex.test(this.password) && regularExpression.test(this.password)) {
          this.classPasswd = "ok";
        }
        //Estilo para los requerimientos de la clave
        const red = 'color :  rgb(235, 74, 74) ;'
        const green = 'color : green  ;'

        this.styleCarac = value.length < 8 ? red : green;
        this.styleUpper = (value.replace(/[*A-Z]/g, "").length) < value.length ? green : red;
        this.styleNum = (value.replace(/[*0-9]/g, "").length) < value.length ? green : red;
        this.styleSpecial = (value.replace(regularExpression, "").length) < value.length ? green : red;
      }
    },      
    data: function () {
      return {
        version: process.env.VUE_APP_VERSION,
        token: '',
        password: '',
        
        modalTitulo:'Regeneración exitosa',
        modalMessage: 'Oprime el botón de "Aceptar" para ir al Inicio de Sesión',
        modalShowsError: false,
        fortalezaIncorrecta: false,

        styleCarac : 'color:grey;',
        styleUpper : 'color:grey;',
        styleNum : 'color:grey;',
        styleSpecial : 'color:grey',

        pwVisible: false,
        pwInputValue : "password",
      }
    },
    computed : {
      validaDatos(){
        return !(this.token &&
            passRegex.test(this.password) &&
            regularExpression.test(this.password));
      },
    },
    methods: {
      oculta () {
          this.pwVisible = !this.pwVisible;
          this.pwInputValue = (this.pwVisible) ? "text" : "password";
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
      goLogin() {
        router.push('/ui/login');
      },
      cambiaClave() {
        this.fortalezaIncorrecta = false;
        this.modalShowsError = true;

        if(this.password.length<4) {
          this.abreToast('La clave debe poseer al menos 4 caracteres');
          return;
        }

        axios.post("https://access.qbits.mx/api/forgot-password-update", {
          pass: this.password,
          token: this.token,
        }).then(response => {
          if(response) {
            this.modalShowsError = false;
            this.modalTitulo ='Regeneración exitosa';
            this.modalMessage = 'Tu clave ha sido regenerada exitosamente, ahora puedes iniciar sesión !';
            this.$refs.avisoWindow.openModal();
          }
        }).catch(error => {

          traduce(error.response)
            .then((result) => {            
              if (error.response) {            
                this.errorAlert(result)
              }           
            }).catch((err) => {
              err;                
            });

        }).finally(
          console.log(".")
        );
      }
    },
  }
</script>

<style scoped>
  .a3 {
    color: #fff;
    text-align: right;
    text-decoration: none;
  }

  .a3:hover {
    color: #fff;
  }

  .ancho {
    max-width: 360px;
  }

  .centra {
    margin: auto;
    padding-top: 10%;
  }

  #footer {
    position: fixed;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    left: 0;
    width: 100%;
    /* Height of the footer*/
    height: 40px;
    background: #444;
    color: #fff;
    text-align: right;
  }

  .form-control:focus {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(168, 161, 161, 0.58);
  }

  .caja {
    padding-left: 33px;
    display: block;
    box-sizing: border-box;
    margin-bottom: 12px;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #fff;
    font-family: inherit;
    color:#fff;
  }

  .icon-lock {
    padding-left: 30px;
    background: url("@/assets/lock-w.png") no-repeat left;
    background-size: 14px;
    background-position: 2%50%;
  }

  .icon-key {
    padding-left: 30px;
    background: url("@/assets/key-w.png") no-repeat left;
    background-size: 14px;
    background-position: 2%50%;
  }

  .oculta {
    display: block;
    text-align: left;
  }

  .fondo {
    position: absolute;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: 
          linear-gradient(to bottom, rgba(18,42, 66, .85), rgba(18,42, 66, .85)), 
          url(@/assets/imagenlogin.jpg);
        -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover; 
  }

  .card {
    background-color: transparent;
  }

  .logo {
    width: 100px;
    height: 140px;
    margin-bottom: 30px;
  }

  small, label {
    color:#fff;
  }

</style>