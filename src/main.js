import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/custom-bootstrap.scss'
import 'font-awesome/css/font-awesome.css'
import 'animate'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue)
app.use(BootstrapVueIcons)
app.mount('#app')