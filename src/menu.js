const menu = [
  {
    path: '/aboutMe', //해당 경로 접속할 경우
    meta: {
      title: 'About Me',
      text: '소개하는 페이지입니다.',
      icon: '💥',
    },
    component: () => import('@/pages/TheAboutMe.vue')
  },
  {
    path: '/projects',
    meta: {
      title: 'Projects',
      text: '소개하는 페이지입니다.',
      icon: '🌹',
    },
    component: () => import('@/pages/TheProjects.vue')
  },
  {
    path: '/components',
    meta: {
      title: 'Components',
      text: '소개하는 페이지입니다.',
      icon: '🎨',
    },
    component: () => import('@/pages/TheComponents.vue')
  },
  {
    path: '/hobby',
    meta: {
      title: 'Hobby',
      text: '소개하는 페이지입니다.',
      icon: '🧬',
    },
    component: () => import('@/pages/TheHobby.vue')
  },
  // {
  //   path: '/modify',
  //   meta: {
  //     title: 'modify',
  //     text: 'modify 소개하는 페이지입니다.',
  //     icon: '❗',
  //   },
  //   component: () => import('@/pages/TheModify.vue')
  // },
];

export default menu;