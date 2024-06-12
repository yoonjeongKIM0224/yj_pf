import { createWebHistory, createRouter } from 'vue-router';

// component import
import TheAboutMe from '@/pages/TheAboutMe.vue'
import TheProjects from '@/pages/TheProjects.vue'
import TheComponents from '@/pages/TheComponents.vue'
import TheHobby from '@/pages/TheHobby.vue'
import TheListDetail from '@/components/TheListDetail.vue'

const routes = [
  {
    path: '/about_me', //해당 경로 접속할 경우
    component: TheAboutMe, //해당 컴포넌트 보여줌
    name: {
      title: 'About Me',
      text: 'About Me 소개하는 페이지입니다.',
      icon: '💥',
    },
  },
  {
    path: '/projects',
    component: TheProjects,
    name: {
      title: 'Projects',
      text: 'Projects 소개하는 페이지입니다.',
      icon: '🌹',
    },
  },
  {
    path: '/components',
    component: TheComponents,
    name: {
      title: 'Components',
      text: 'Components 소개하는 페이지입니다.',
      icon: '🎨',
    },
  },
  {
    path: '/hobby',
    component: TheHobby,
    name: {
      title: 'Hobby',
      text: 'Hobby 소개하는 페이지입니다.',
      icon: '🧬',
    },
  },
  {
    path: '/detail/:itemId',
    component: TheListDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;