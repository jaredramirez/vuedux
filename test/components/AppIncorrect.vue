<template>
  <provider v-bind:store="store">
    <div id="child" />
    <counter id="counter" />
  </provider>
</template>

<script>
import {bindActionCreators} from 'redux';

import {Provider, connect} from '../../dist/vuedux';
import store, {actionCreators} from '../mockStore';

import Counter from './Counter.vue';

const mapStateToProps = ({count}) => ({count});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const App = {
  name: 'App',
  components: {
    Provider,
    Counter: connect(mapStateToProps, mapDispatchToProps)(Counter),
  },
  data() {
    return {
      store,
    };
  },
}

export default App;
</script>
