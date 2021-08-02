import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import CareersPage from '/src/views/CareersPage.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash });
        }, 500);
      });
    }
    if(savedPosition) {
      return savedPosition;
    }
    if(to.meta.noScroll && from.meta.noScroll) {
      return {};
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'SamaTech' },
    },
    {
      path: '/careers',
      name: 'Careers',
      component: CareersPage,
      meta: { title: 'SamaTech Careers' },
    },
  ],
});

router.afterEach((to, _from) => {
  const parentTitle = to.matched.some(record => record.meta.title);
  document.title = to.meta.title || parentTitle || 'SamaTech';
});

export default router;
