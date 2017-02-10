import {ADD_USER, DELETE_USER} from './types';

let nextId = 0;

export const addUser = user => ({type: ADD_USER, id: nextId++, user});
export const deleteUser = id => ({type: DELETE_USER, id});
