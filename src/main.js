import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import MovieCard from './components/MovieCard.vue'
const app = createApp(App)
app.component('movie-card', MovieCard)
app.use(router).mount('#app')