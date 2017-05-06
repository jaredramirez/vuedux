## API

<a name="provider"></a>
### `Provider`
Component to wrap around the root of you app. Has a single prop of your applications `store`

Common Usage:
```
<template>
  <provider v-bind:store="store">
    // other components that use `connect
  </provider>
</template>
```
Common Usage with JSX:
```
<Provider store={store}>
  <App />
</Provider>
```

<a name="connect"></a>
### `connect(mapStateToProps, mapDispatchToProps): func(componentToConnect)`
Function to connect a component to the redux store.

**Arugments**
* `mapStateToProps(state, ownProps): mappedPropsObject`
  *Optional* Provides the current state and the wrapped components props as arguements.
  *Returns* An plain javascript object to be returned that will be applied a props to the wrapped component.
  Common usage:
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

