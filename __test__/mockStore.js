import configureStore from 'redux-mock-store'

function getState() {
  return {
    todos: [
      {text: 'one'},
      {text: 'two'},
      {text: 'three'},
    ],
  };
}

export default configureStore(getState)();
