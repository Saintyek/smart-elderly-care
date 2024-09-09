import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

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
    },
    {
      path: '/user/profile',
      component: () => import('@/views/user/PersonalCenter.vue')
    }
  ]
})

// 登录访问拦截
router.beforeEach((to) => {
  // 如果没有Token且访问用户界面则拦截到首页
  const useStore = useUserStore()
  if (!useStore.token && to.path == '/user/profile') return '/home/emotion-sense'
})
export default router
