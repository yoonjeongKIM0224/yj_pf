import { createWebHistory, createRouter } from 'vue-router';

//component import 

const routes = [
  {
    // path: '/경로', //해당 경로 접속할 경우
    // component: import 해온 컴포넌트, //해당 컴포넌트 보여줌
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;