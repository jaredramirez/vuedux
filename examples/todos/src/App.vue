<template>
  <provider v-bind:store="store">
    <div class="container">
      <list />
      <read-only-list title="Read Only List" />
    </div>
  </provider>
</template>

<script>
import List from './components/list';
import ReadOnlyList from './components/readOnlyList';

import {Provider} from './../../../dist/vuedux';
import store from './store';

const App = {
  name: 'App',
  funcional: true,
  components: {
    Provider,
    List,
    ReadOnlyList,
  },
  data() {
    return {
      store,
    };
  },
};

export default App;
</script>

<style>
  .container {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>
