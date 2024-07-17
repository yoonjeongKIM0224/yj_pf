const menu = [
  {
    path: '/aboutMe', //해당 경로 접속할 경우
    meta: {
      title: 'About Me',
      text: '저의 기본적인 정보를 소개합니다.',
      icon: 'clover1',
    },
    component: () => import('@/pages/TheAboutMe.vue')
  },
  {
    path: '/projects',
    meta: {
      title: 'Projects',
      text: '제가 작업한 프로젝트를 소개합니다.',
      icon: 'pencil1',
    },
    component: () => import('@/pages/TheProjects.vue')
  },
  {
    path: '/components',
    meta: {
      title: 'Components',
      text: '제가 만든 다양한 컴포넌트를 소개합니다.',
      icon: 'sawtooth1',
    },
    component: () => import('@/pages/TheComponents.vue')
  },
  {
    path: '/hobby',
    meta: {
      title: 'Hobby',
      text: '프론트 작업 외의 다양한 취미 작업물을 소개합니다.',
      icon: 'tv1',
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