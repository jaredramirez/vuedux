import Vue from 'vue';
import {Provider} from 'vuedux';
import router from './router';

import App from './App';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => (
    <Provider store={store}>
      <App />
    </Provider>
  ),
});
