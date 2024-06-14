import { createWebHistory, createRouter } from 'vue-router';
import menu from '@/menu.js';

const routes = [
  {
    path: '/detail/:itemId',
    props: true,
    component: () => import('@/components/TheListDetail.vue')
  },
  ...menu
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;