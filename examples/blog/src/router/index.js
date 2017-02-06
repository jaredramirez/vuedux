import Router from 'vue-router';
import Vue from 'vue';

import Hello from 'components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
