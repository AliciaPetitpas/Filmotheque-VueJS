import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Accueil.vue')
    },
    {
      path: '/films',
      component: () => import('@/views/Films.vue')
    },
    {
      path: '/genres',
      component: () => import('@/views/Genres.vue')
    },
    {
      path: '/participants',
      component: () => import('@/views/Participants.vue')
    },
  ]
})

export default router
