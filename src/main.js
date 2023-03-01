// from: https://router.vuejs.org/guide/#javascript
import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app
.use(vuetify)
.use(Toast)
.use(store)
.use(router)
.mount('#app')

