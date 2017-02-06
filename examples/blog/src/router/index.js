import Router from 'vue-router';
import Vue from 'vue';

import posts from 'containers/posts';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: posts,
    },
    {
      path: '/posts',
      name: 'posts',
      component: posts,
    },
    {
      path: '/profile',
      name: 'profile',
      component: posts,
    },
    {path: '*', redirect: '/dashboard'},
  ],
});

export default router;
