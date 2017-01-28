// import Vue from 'vue';
// import Revue from 'revue';
// import {createStore, bindActionCreators} from 'redux';
import {createStore} from 'redux';
import reducer from '../reducers';
// import * as actionCreators from '../actions';

const reduxStore = createStore(reducer);
export default reduxStore;
// const actions = bindActionCreators(actionCreators, reduxStore.dispatch);
// const store = new Revue(Vue, reduxStore, actions);
// export default store;
