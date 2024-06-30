import { createWebHistory, createRouter } from 'vue-router';
import menu from '@/menu.js';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior () {
    return { top: 0 }
  },
  routes: [
    {
      path: '/', //해당 경로 접속할 경우
      component: () => import('@/pages/TheHome.vue')
    },
    {
      path: '/detail/:itemId',
      props: true,
      component: () => import('@/components/TheListDetail.vue')
    },
    ...menu
  ],
})

export default router;