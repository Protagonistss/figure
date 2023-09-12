import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppOne from '@/views/micro-apps/AppOne.vue'

const router = createRouter({
  history: createWebHistory('/base/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/chat/',
      children: [
        {
          path: '/chat/:page*',
          name: 'chat',
          component: AppOne
        },
        {
          path: '/amis/:page*',
          name: 'amis',
          component: () => import('@/views/micro-apps/MicroAmis.vue')
        }
      ]
    }
  ]
})

export default router
