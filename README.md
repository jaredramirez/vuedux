## Vuedux
> Redux bindings for Vue.js, inspired by React-Redux.

### Installation
```
yarn add vuedux
```
or
```
npm i --save vuedux
```

### Usage
**store.js**
Create your store with redux like normal:
```
import {createStore} from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);
export default store;
```

**main.js**
Inject the store into the top level of your application:
```
import Vue from 'vue';
import {Provider} from 'vuedux';

import App from './App';
import store from './store';

new Vue({
  el: '#app',
  render(h) {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }, 
```

**App.js**
Just like React-Redux, map your actions and state to the component and they will be passed in as props. 
```
import {bindActionCreators} from 'redux';
import {link} from 'vuedux';

import * as todosActionCreators from '../actions/todos';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const App = {
  name: 'App',
  // Don't forget to add your state/actions to your component's props
  props: ['todos', 'actions'],
  render(h) {
    return (
      <div style={styles.container}>
        {
        this.todos.map((todo, key) =>
          <span key={key}>{todo.text}</span>)
        }
        <input value='add' onClick={actions.addTodo({text: 'another'})} />
      </div>
    );
  },
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
});

const mapStateToProps = state => ({
  todos: state.todos,
});

export default link(mapDispatchToProps, mapStateToProps, App);
```

### Examples
* [Todos](examples/todos)

### License
[MIT](https://opensource.org/licenses/MIT)

