import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import axios from 'axios';


import Home from '@/views/HomeView'
import UsaModal from '@/views/UsaModal'
import Prueba from '@/views/PruebaView'
import ProfileView from '@/views/ProfileView.vue'

import Login from '@/views/LoginView'
import Forbidden from '@/views/ForbiddenView'


import Example1 from '@/views/Example1View'
import Example2 from '@/views/Example2View'
import Example3 from '@/views/Example3View'
import Example4 from '@/views/Example4View'
import ForgotPassView from '@/views/ForgotPassView'
import RegisterView from '@/views/RegisterView'
import RegisterConfirmView from '@/views/RegisterConfirmView'
import UpdatePassView from '@/views/UpdatePassView'
import TerminosCondicionesView from '@/views/TerminosCondicionesView'
import RegisterSuccess from '@/views/RegisterSuccess'
import ImageCropperView from '@/views/ImageCropperView'
import NavigationDrawer from '@/components/NavigationDrawer'
import NuevaImagen from '@/views/NuevaImagen'
import UserImages from '@/views/UserImages'
import NewImageProfile from '@/views/NewImageProfile'

import LoginPage from '@/views/LoginPage'
import RegeneraClave from '@/views/RegeneraClave'
import RegeneraClaveConfirma from '@/views/RegeneraClaveConfirma'
import RegisterPage from '@/views/RegisterPage'
import VideoView from '@/views/VideoView'
import InfoView from '@/views/InfoView'
import PageNotFound from '@/views/PageNotFound'

import TaskCard from '@/views/TaskViewNice'
import PersonalData from '@/views/PersonalData'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { allowedRoles: ['admin','regular'] }  
  },
  {
    path: '/ui/personal-data',
    name: 'personal-data',
    component: PersonalData
  }, 
  {
    path: '/ui/task',
    name: 'task-card',
    component: TaskCard
  },  
  {
    path: '/ui/regenera-clave',
    name: 'regenera-clave',
    component: RegeneraClave
  },
  {
    path: '/ui/video-view',
    name: 'video-view',
    component: VideoView,
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/info-view',
    name: 'info-view',
    component: InfoView,
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/regenera-clave-confirma',
    name: 'regenera-clave-confirma',
    component: RegeneraClaveConfirma
  },
  {
    path: '/ui/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/ui/login-page',
    name: 'loginPage',
    component: Login
  },
  {
    path: '/ui/forbidden',
    name: 'forbidden',
    component: Forbidden
  },
  {
    path: '/ui/prueba',
    name: 'prueba',
    component: Prueba,
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/usa-modal',
    name: 'usa-modal',
    component: UsaModal
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { allowedRoles: ['regular'] }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/example1',
    name: 'example1',
    component:Example1
  },
  {
    path: '/ui/example2',
    name: 'example2',
    component:Example2
  },
  {
    path: '/ui/example3',
    name: 'example3',
    component: Example3,
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/example4',
    name: 'example4',
    component: Example4
  },
  {
    path: '/ui/forgotpass',
    name: 'forgotpass',
    component: ForgotPassView
  },
  {
    path: '/ui/register',
    name: 'register',
    component: RegisterPage
  },  
  {
    path: '/ui/register-page',
    name: 'register-page',
    component: RegisterView
  },  
  {
    path: '/ui/registerconfirm',
    name: 'registerconfirm',
    component: RegisterConfirmView
  },
  {
    path: '/ui/updatepass',
    name: 'updatepass',
    component: UpdatePassView
  },
  {
    path: '/ui/terminoscondiciones',
    name: 'terminoscondiciones',
    component: TerminosCondicionesView
  },
  {
    path: '/ui/registersuccess',
    name: 'registersuccess',
    component: RegisterSuccess
  },
  {
    path: '/ui/imagecropper',
    name: 'imagecropper',
    component: ImageCropperView,
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/menu',
    name: 'menu',
    component: NavigationDrawer,   
  },
  {
    path: '/ui/nuevaimagen',
    name: 'nuevaimagen',
    component: NuevaImagen,
    meta: { allowedRoles: ['admin','regular'] }
  },
  {
    path: '/ui/userimages',
    name: 'userimages',
    component: UserImages,
    meta: { allowedRoles: ['admin','regular'] }  
  },
  {
    path: '/ui/imageprofile',
    name: 'imageprofile',
    component: NewImageProfile,
    meta: { allowedRoles: ['admin','regular'] }  
  },
  {
    path: '/ui/reg',
    name: 'imageprofile',
    component: RegisterPage,     
  },
  { path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: PageNotFound },
]


const router = createRouter({ 
  history: createWebHistory(), 
  scrollBehavior: () => ({ y: 0 }),
  routes 
})

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function checaJwt() {
//  var jwt = store.getters.getjwt;
  var jwt = store.state.userData.jwt;
  if (jwt && jwt !== undefined && jwt.length > 0) {
      const jwtPayload = parseJwt(jwt);
      //jwtPayload.exp=1625505833-28*60;      
      let now = new Date();               
      let limite = new Date (jwtPayload.creation);
      limite.setMinutes(limite.getMinutes() + 30);
                                    
      if (now> limite) {               
          store.commit('setUserData', {
              userData: {
                idUser: 0,
                nick: 'cyz',
                email: '',
                role: '',
                lastSuccesfullAccess: '',
                jwt: '', //  jwt='' => signed: false,
                usuarioDetalle: null,
            },
          });
          store.commit('setDestination', '/');
      } else {
          //const timeToExpire =  jwtPayload.exp - (Date.now()/1000);
          //console.log('Tiempo para que expire:' + timeToExpire);
      }
  }
}

router.beforeEach((to, from, next) => {
  
  axios.defaults.headers.common = {"X-CSRFToken": store.state.userData.jwt};
  axios.defaults.headers.common = {"jwt": store.state.userData.jwt};
  checaJwt();
  //TODO: VALIDAR  EL JWT porque no tiene el valor de expire
  if (to.matched.some(record => record.meta.allowedRoles )) { // *** El recurso SI requiere autenticación ya que pide ciertos roles
    
     
    // NO estás autenticado actualmente:
    if (store.state.userData.jwt===''|| store.state.userData.jwt == undefined) {      
      store.commit('setDestination', to.fullPath);
      router.push("/ui/login");
      return;
    }
    // SI estoy autenticado actualmente, asi que solo voy a checar si mi rol es el adecuado:              
    if(to.matched.some(ok => !ok.meta.allowedRoles.includes(store.state.userData.role))) {
      router.push('/ui/forbidden'); // no tengo el rol asociado a esa interfaz
      return;
    }
  }
  next(); // *** El recurso NO requiere autenticación
})

export default router
