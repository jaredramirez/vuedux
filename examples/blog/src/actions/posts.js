import {ADD_POST, DELETE_POST} from './types';

let nextId = 0;

export const addPost = post => ({type: ADD_POST, id: nextId++, post})
export const deletePost = id => ({type: DELETE_POST, id});
