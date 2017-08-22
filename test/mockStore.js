import {createStore} from 'redux';

// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const increment = () => ({type: INCREMENT});
const decrement = () => ({type: DECREMENT});
const reset = () => ({type: RESET});
export const actionCreators = {
  increment,
  decrement,
  reset,
};

// STATE
const initialState = {
  count: 0,
};

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

// STORE
export default createStore(reducer);
