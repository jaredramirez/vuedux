import {ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/types';
import createReducer from './utils';

const initialState = [
  {id: 0, text: 'One', completed: false},
  {id: 1, text: 'Two', completed: true},
  {id: 2, text: 'Three', completed: false},
];

const addTodo = (state, {todo}) => [
  ...state,
  todo,
];

const editTodo = (state, {todo, index}) =>
  state.map((curTodo, curIndex) =>
    (curIndex === index ? todo : curTodo)
  );

const removeTodo = (state, {index}) => {
  const todos = state.todos.splice(index, 1);
  return [
    todos,
  ];
};

const toggleTodo = (state, {index}) =>
  state.map((curTodo, curIndex) =>
    (curIndex === index ? {...curTodo, completed: !curTodo.completed} : curTodo)
  );

export default createReducer(initialState, {
  [ADD_TODO]: addTodo,
  [EDIT_TODO]: editTodo,
  [REMOVE_TODO]: removeTodo,
  [TOGGLE_TODO]: toggleTodo,
});

