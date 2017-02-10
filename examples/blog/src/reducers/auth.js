import {LOGIN, LOGIN_FAIL, LOGOUT} from '../actions/types';
import {createReducer} from './utils';

const login = (state, {username}) => ({
  ...state,
  username,
  isLoggedIn: true,
});

const reset = state => ({
  ...state,
  username: null,
  isLoggedIn: false,
});

const initialState = {
  username: null,
  isLoggedIn: false,
};

export default createReducer(initialState, {
  [LOGIN]: login,
  [LOGIN_FAIL]: reset,
  [LOGOUT]: reset,
});
