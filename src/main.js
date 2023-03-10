import { createApp } from 'vue'
import store  from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'



const app = createApp(App)
app.use(router)
.use(store)
.use(VueAxios, axios)
.use(Vuelidate)
.mount('#app')

