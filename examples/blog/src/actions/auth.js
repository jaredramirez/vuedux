import {ADD_USER, AUTHENTICATE_USER, LOGIN} from './types';

export const addUser = user => ({type: ADD_USER, user});
export const authenticateUser = user => ({type: AUTHENTICATE_USER, user});
export const login = user => ({type: LOGIN, user});
