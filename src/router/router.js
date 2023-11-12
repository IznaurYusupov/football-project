import { createRouter, createWebHistory } from "vue-router"

import Home from '../pages/Home.vue'
import Teams from '../pages/Teams.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/teams',
        name: 'Teams',
        component: Teams
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router