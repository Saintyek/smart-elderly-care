import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/LayoutContainer.vue'),
      redirect: '/home/emotion-sense',
      children: [
        {
          path: '/home/emotion-sense',
          component: () => import('@/views/home/function/EmotionSense.vue')
        },
        {
          path: '/home/fire-dedication',
          component: () => import('@/views/home/function/FireDedication.vue')
        },
        {
          path: '/home/chess-game',
          component: () => import('@/views/home/function/ChessGame.vue')
        },
        {
          path: '/home/house-monitoring',
          component: () => import('@/views/home/function/HouseMonitoring.vue')
        }
      ]
    }
  ]
})

export default router
