<template>
  <provider v-bind:store="store">
    <div class="container">
      <list title="Editable List" />
      <read-only-list title="Read Only List" />
    </div>
  </provider>
</template>

<script>
import {bindActionCreators} from 'redux';

import {Provider, connect} from './../../../dist/vuedux';
import store from './store';

import List from './components/list';
import ReadOnlyList from './components/readOnlyList';
import * as todosActionCreators from './actions/todos';

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
});

const App = {
  name: 'App',
  funcional: true,
  components: {
    Provider,
    List: connect(mapStateToProps, mapDispatchToProps)(List),
    ReadOnlyList: connect(mapStateToProps)(ReadOnlyList),
  },
  data() {
    return {
      store,
    };
  },
};

export default App;
</script>

<style scoped>
  .container {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>
