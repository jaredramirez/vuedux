import Vue from 'vue';
import {Provider} from 'vuedux';
import App from './App';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render(h) {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  },
});
