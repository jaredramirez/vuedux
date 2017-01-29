import {ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO} from './types';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const editTodo = (todo, index) => ({
  type: EDIT_TODO,
  todo,
  index,
});

export const removeTodo = index => ({
  type: REMOVE_TODO,
  index,
});

export const toggleTodo = index => ({
  type: TOGGLE_TODO,
  index,
});
