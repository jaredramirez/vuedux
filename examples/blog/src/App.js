import Vue from 'vue';
import Nav from 'containers/nav';

const RouterView = Vue.component('router-view');

const styles = {
  container: {
    fontFamily: 'Andale Mono, AndaleMono, monospace',
  },
  view: {
    backgroundColor: '#F0F2F8',
    paddingTop: '3.8em',
  },
};

export default {
  name: 'App',
  render: h => (
    <div style={styles.container}>
      <Nav />
      <div style={styles.view}>
        <RouterView />
      </div>
    </div>
  ),
};
