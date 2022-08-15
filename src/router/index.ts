import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../components/Inicio.vue'
import Horarios from '../components/Horarios.vue'
import Eventos from '../components/Eventos.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/horarios',
      name: 'Horarios',
      component: Horarios
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos
    }

  ]
})

export default router
