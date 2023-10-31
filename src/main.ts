import { createApp } from 'vue'
import '@/assets/fonts/fonts.css'
import './style.css'
import App from './App.vue'
import router from './router'
import './composables/useTwitterAuth'

const app = createApp(App)
app.use(router)
app.mount('#app')
