import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MicroAtlas from '@/views/micro-apps/MicroAtlas.vue'

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
          component: MicroAtlas
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
