import {createStore} from 'redux';
import reducer from '../reducers';

// const store = createStore(reducer);
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
