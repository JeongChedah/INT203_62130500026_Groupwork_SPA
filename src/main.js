import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import BackBuddy from './components/BackBuddy.vue'
const app = createApp(App)
app.component('back-buddy', BackBuddy)
app.use(router).mount('#app')