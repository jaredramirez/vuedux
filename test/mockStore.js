import configureStore from 'redux-mock-store';

// ACTIONS
const addTodo = () => ({type: 'ADD_TODO'});
export const actions = {
  addTodo,
};

// STORE
const middlewares = [];
const mockStore = configureStore(middlewares);

// STATE
const initialState = {
  todos: [],
};

export default mockStore(initialState);
