import Vue from 'vue';
import App from './App';
import store from './store';
import {Provider} from '../../../dist/vuedux';

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
