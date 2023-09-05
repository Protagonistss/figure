import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppOne from '@/views/micro-apps/AppOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'demo',
          name: 'demo',
          component: () => import('@/views/Demo.vue')
        },
        {
          path: 'bothway-tree',
          name: 'bothway-tree',
          component: () => import('@/views/BothwayTree.vue')
        },
        {
          path: 'relation-graph',
          name: 'relation-graph',
          component: () => import('@/views/RelationGraph.vue')
        },
        {
          path: 'tag-view',
          name: 'tag-view',
          component: () => import('@/views/TagsView.vue')
        },
        {
          path: 'micro-atlas/:page*',
          name: 'micro-atlas',
          component: AppOne
        }
      ]
    }
  ]
})

export default router
