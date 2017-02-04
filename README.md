## Vuedux
> Familiar Redux bindings for Vue.js, inspired by React-Redux.

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
};
```

**App.js**
Just like React-Redux, map your actions and state to the component and they will be passed in as props. 
```
import {bindActionCreators} from 'redux';
import {connect} from 'vuedux';

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

export default connect(mapDispatchToProps, mapStateToProps)(App);
```

### Examples
* [Todos](examples/todos)

### What about Revue?
[Revue](https://github.com/revue/revue) is another package that also provides Redux bindings. It connects Redux and Vue is though creating a modified Redux `store` and binding the state to every component. Having to modify Redux to fit Vue, and unnecessarily providing each component with the state is an approach I wasn't wild about. Redux should to be independent of Vue and to only provide user-specified components with actions and state variables. So, Vuedux was created to fill those requierments.

### License
[MIT](https://opensource.org/licenses/MIT)

