<template>
    <div class="fondo">
      <div class="ancho centra">
        <div>
          
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <!-- X -->
                <div class="card-header">
                  <label>Regeneración de clave</label>
                </div>
                
                <div class="card-body ">
                  <div class="row" >
                     <img :src="require(`../assets/logo-big.png`)" class="logo" />
                  </div>
    
                    <small>Introduce el correo electrónico con el que te registraste en el sistema para recuperar tu cuenta</small>
                    <br/><br/>
    
                    <div class ="form-group">
                      <div class="row px-3">
                        <input type="text" class="borders form-control icon-email" :class="classCorreo" placeholder="ejemplo@gmail.com" v-model="correo">
                        <small class="notValid">{{msgCorreo}}</small>                   
                      </div>
                    </div>
                    
                    <br>
                    <v-row align="center" justify="center" class="mx-auto px-8 py-8">
                      <!-- 
                        https://www.google.com/recaptcha/admin/site/315317933/settings
                        cuenta de pruebas asociada con mi cuenta personal de gmail
                      -->
                      <vue-recaptcha
                          id="solvecaptcha"
                          ref="recaptcha"
                          :rules="checkRules"
                          sitekey="6LetXssSAAAAAF7WikI044mAdOiyyKPUxkklqMtN"
                          @expired="onCaptchaExpired"
                          @verify="onCaptchaVerified"
                      />
                    </v-row>
                    <br>
                    <div class="form-group row text-center">
                      <div class="col">
                        <button :disabled="habilitaBoton" @click="cambiaClave" class="btn btn-success">Regenerar clave</button>
                      </div>
                      <div class="col">
                        <button  @click="openLoginPage" class="btn btn-warning" >Regresar a login</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">&copy; 2023 Front V. {{ version }} Qbits.mx</div>
      </div>
    </div>
  </template>
  
<script>
    import { VueRecaptcha } from "vue-recaptcha";
    import router from '../router'
    import axios from 'axios'
    
    const emaiRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const HTTP_STATUS = {
        OK: 200,
        FORBIDDEN: 403,
    };

    export default {
        data() {
          return {
            version: process.env.VUE_APP_VERSION,
            correo: '',
            msgCorreo:'',
            classCorreo:'',
            msgErr: "",
            captcha: false,
            loading: false,
            habilitaBoton: true,
            checkRules: [(v) => !!v || ""],
          }
        },
        watch: {
          correo() { 
            this.msgCorreo="";
            var flagBadMail = this.correo.length<30 && !emaiRegex.test(this.correo);
            if(flagBadMail) this.msgCorreo="Correo inválido"
            var flag = !this.captcha || flagBadMail
            this.habilitaBoton=flag;
          },
          captcha() {
            var flagBadMail = this.correo.length<30 && !emaiRegex.test(this.correo);
            var flag = !this.captcha || flagBadMail
            this.habilitaBoton=flag;
          }
        },
        components: {
          VueRecaptcha
        },
        methods: {
          habilta() {
            var flag = this.captcha && this.correo.length<30 && emaiRegex.test(this.correo)
            this.habilitaBoton=flag;
          },
          cambiaClave() {
            axios.get('https://access.qbits.mx/api/forgot-password-request?email='+this.correo, {
            }).then(response => {
              console.log(response);
              console.log(response.data);
              console.log(response.status);
            }).catch(error => {
              if(error.response) {
                  console.log(error);
              }
            }).finally(
              console.log('finaliza proceso de solicitud de regeneracion de clave')
            );
            router.push('/ui/regenera-clave-confirma').catch(()=>{});
          }, 
          openLoginPage() {
            router.push('/ui/login').catch(()=>{});
          },
          onCaptchaVerified(recaptchaToken) {
            this.captcha = false;
            axios.post("https://access.qbits.mx/api/check-captcha", {
                response: recaptchaToken,
                ip: "127.0.0.1",
            }).then((response) => {
                if (response.status === HTTP_STATUS.OK) {
                    this.captcha = true;
                } else {
                    this.msgErr = "Regreso con un estatus: " + response.status;
                }
            }).catch((error) => {
                console.log(error.data);
                this.msgErr = "Ha ocurrido un error de red: " + error;
            }).finally(() => (this.loading = false));
            },
          onCaptchaExpired() {
                this.captcha = false;
                this.$refs.recaptcha.reset();
          },          
        }, 
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    .borders {
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

    .icon-email {
        padding-left: 30px;
        background: url("@/assets/email-w.png") no-repeat left;
        background-size: 14px;
        background-position: 2%50%;
    }

    .notValid {
        color: #ff0000;
        text-align: right;
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