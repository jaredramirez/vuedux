import Router from 'vue-router';
import Vue from 'vue';

import feed from 'containers/feed';
import profile from 'containers/profile';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: feed,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {path: '*', redirect: '/feed'},
  ],
});

export default router;
