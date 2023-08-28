import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
        }
      ]
    }
  ]
})

export default router
