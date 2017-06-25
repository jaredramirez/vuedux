## API

<a name="provider"></a>
### `<Provider store>`
Component to wrap around the root of you app. Has a single prop of your applications `store`


Common Usage with JSX:
```
<Provider store={store}>
  <App />
</Provider>
```
Common Usage with templates:
```
<template>
  <provider v-bind:store="store">
    <app />
  </provider>
</template>

<script>
export default {
  name: 'Root',
  funcional: true,
  components: {Provider},
  data() {
    return {
      store,
    };
  },
};
</script>
```

<a name="connect"></a>
### `connect(mapStateToProps, mapDispatchToProps): func(componentToConnect)`
Function to connect a component to the redux store.

**Arugments**
* `mapStateToProps(state, ownProps): mappedPropsObject`
  *Optional* Provides the current state and the wrapped components props as arguements.
  *Returns* An plain javascript object to be returned that will be applied a props to the wrapped component.
  ```
  const mapStateToProps = state => ({
    todos: state.todos,
  });
  ```
* `mapDispatch(dispatch, ownProps): mappedDispatchObject`
  *Optional* Provides access to the dispatch object to enable easily dispatching actions to the store.
  Common usage:
  *Returns* An plain javascript object to be returned that will be applied a props to the wrapped component.
  ```
  import {bindActionCreators} from 'redux';
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todosActionCreators, dispatch),
  });
  ```
