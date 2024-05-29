import { createWebHistory, createRouter } from 'vue-router';

// component import
import TheAboutMe from '@/pages/TheAboutMe.vue'
import TheProjects from '@/pages/TheProjects.vue'
import TheComponents from '@/pages/TheComponents.vue'
import TheHobby from '@/pages/TheHobby.vue'
import TheContactMe from '@/pages/TheContactMe.vue'
import TheListDetail from '@/components/TheListDetail.vue'

const routes = [
  {
    path: '/about_me', //해당 경로 접속할 경우
    component: TheAboutMe, //해당 컴포넌트 보여줌
  },
  {
    path: '/projects',
    component: TheProjects,
  },
  {
    path: '/components',
    component: TheComponents,
  },
  {
    path: '/hobby',
    component: TheHobby,
  },
  {
    path: '/contact_me',
    component: TheContactMe,
  },
  {
    path: '/detail/:itemId',
    component: TheListDetail,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;