import Vue from 'vue';
import Nav from 'containers/nav';

const RouterView = Vue.component('router-view');

const style = {
  backgroundColor: '#F0F0F0',
  padding: '15px',
};

export default {
  name: 'App',
  render: h => (
    <div>
      <Nav />
      <div style={style}>
        <RouterView />
      </div>
    </div>
  ),
};
