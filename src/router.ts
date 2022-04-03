import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CareersPage from '@/views/CareersPage.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    noScroll?: boolean;
    scrollAnchor?: string;
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash });
        }, 500);
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.noScroll && from.meta.noScroll) {
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
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'SamaTech';
});

export default router;
