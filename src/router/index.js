//create router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Cenima from '../views/Cenima.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies
    },
    {
        path: '/cenima',
        name: 'Cenima',
        component: Cenima
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router