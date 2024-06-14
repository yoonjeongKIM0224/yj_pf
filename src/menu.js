const menu = [
  {
    path: '/about_me', //해당 경로 접속할 경우
    meta: {
      title: 'About Me',
      text: 'About Me 소개하는 페이지입니다.',
      icon: '💥',
    },
    component: () => import('@/pages/TheAboutMe.vue')
  },
  {
    path: '/projects',
    meta: {
      title: 'Projects',
      text: 'Projects 소개하는 페이지입니다.',
      icon: '🌹',
    },
    component: () => import('@/pages/TheProjects.vue')
  },
  {
    path: '/components',
    meta: {
      title: 'Components',
      text: 'Components 소개하는 페이지입니다.',
      icon: '🎨',
    },
    component: () => import('@/pages/TheComponents.vue')
  },
  {
    path: '/hobby',
    meta: {
      title: 'Hobby',
      text: 'Hobby 소개하는 페이지입니다.',
      icon: '🧬',
    },
    component: () => import('@/pages/TheHobby.vue')
  },
];

export default menu;