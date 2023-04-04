import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/tabs'
  },
  {
    path: '/tabs',
    component: () => import ('../views/tabs/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/tab2'
      },
      {
        path: '/tabs/tab2',
        component: () => import('@/views/tabs/Tab2Page.vue')
      },
      {
        path: '/tabs/tab3',
        component: () => import('@/views/tabs/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/side1/:id',
    component: () => import('../views/Tab1Page.vue')
  },
  {
    path: '/side2/:id',
    component: () => import('../views/Tab4Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
