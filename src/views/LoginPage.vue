<template>
  <div class="fondo">
  <div class="ancho centra">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">{{ tr("Inicio de Sesión") }}</div>
            <div class="card-body">
                <div class="row">
                  <img :src="require('@/assets/logo-big.png')" class="logo"/>
                </div>
                <div class="row">
                  <div class="col-sm-12 text-left">
                    <div class="row px-3">
                      <input type="text" class="borders form-control icon-user" id="text-usr" v-model="usr" placeholder="william@email.com" />
                    </div>
                    <div class="row px-3">
                      <input :type=pwInputValue class="borders form-control icon-lock" id="password" v-model="psw" placeholder=contraseña />
                    </div>
                    <div class="row px-3">
                      <a href="#" @click="oculta" class="a3">
                        <i :class="[pwVisible ? 'fas fa-eye-slash' : 'fas fa-eye']"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-12" style="text-align: center;">
                    <button @click="checkCredentials" class="btn btn-success">{{ tr("Ingresar al sistema") }}</button>
                  </div>
                  <div class="col-sm-12" style="text-align: center;">
                    <br/>
                  </div>                  
                  <div class="col-sm-12" style="text-align: center;">
                    <a href="#" @click="openForgotPage" class="a2">{{ tr("Olvidé mi clave") }}</a><br/>
                    <a href="#" @click="openRegistroPage" class="a2">{{ tr("Deseo registrarme al sistema") }}</a>
                  </div>
                  
                </div>
                <br/>
            </div><!-- ends body-->
        </div><!-- ends card-->
        <br/>
      </div><!-- right section -->
    </div>
  </div>
  <div id="footer">&copy; 2023 Front V. {{ version }} Qbits.mx</div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  import router from '../router'
  import store from '../store'
  import { useToast } from "vue-toastification";
  import { traduce } from "@/store/traductor.js";
  import { t } from "@/store/traductor.js";

  export default {
      setup() {
        // Get toast interface
        const toast = useToast();
        // Make it available inside methods
        return { toast }
      },  
      data: function () {
          return {
            usr: "",
            psw: "",
            version: process.env.VUE_APP_VERSION,
            pwVisible: false,
            pwInputValue : "password",
            msgErr: "",
          }
      },
      mounted() {
        console.log(t("Inicio de Sesión"));
      },
      methods: {
          tr(text) {
            return t(text);
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
          detecta: function(roles) {
              if(store.state.destination.length>0) {
                  var target = store.state.destination;
                  store.commit('setDestination','');
                  return target;
              }
              if (typeof roles === 'string') {
                  return '/';
              } else {
                  for(var i=0; i<roles.length; i++) {
                      switch(roles[i].nombre) {
                          case 'admin': return '/ui/admin'; // rol 1 = administrador
                          case 'user': return '/'; // rol 2 = usuario comun y corriente
                          case 'normal': return '/'; // rol 2 = usuario comun y corriente
                          default: return '/'; // otro rol cualquiera
                      }
                  } // ends for cycle with switch inside
              }
          },
          openRegistroPage: function() {
              router.push({'name':'register'});
          },
          openForgotPage: function() {
              router.push({'name':'regenera-clave'});
          },
          checkCredentials: function() {
              axios.post('https://access.qbits.mx/api/login', {
                  user: this.usr,
                  cred: this.psw
              }).then(response => {
                  var ud = response.data; 
                  store.commit("setUserData", ud);                            
                  const target = this.detecta(store.state.userData.role);                        
                  router.push(target);
              }).catch(error => {
                traduce(error.response)
                  .then((result) => {            
                    if (error.response) {            
                      this.errorAlert(result)
                    }
                  }).catch((err) => {
                    err;
                  });
              })
          },
          oculta () {
            this.pwVisible = !this.pwVisible;
            this.pwInputValue = (this.pwVisible) ? "text" : "password";
          }
      },
  }
</script>
  
<style scoped>
  .ajusta {
    width: 100%;
  }

  .a2 {
    color: #fff;
    text-align: right;
    text-decoration: none;
  }

  .a2:hover {
    color: #009900;
  }
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
    width: 100%;
    /* Height of the footer*/
    height: 40px;
    background: #444;
    color: #fff;
    text-align: right;
  }

  .icon-user {
    padding-left: 30px;
    background: url("@/assets/user-w.png") no-repeat left;
    background-size: 14px;
    background-position: 2%50%;
  }

  .icon-lock {
    padding-left: 30px;
    background: url("@/assets/lock-w.png") no-repeat left;
    background-size: 14px;
    background-position: 2%50%;
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

  .form-control:focus {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(168, 161, 161, 0.58);
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