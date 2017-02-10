import {LOGIN, LOGIN_FAIL, LOGOUT} from './types';

export const login = (username, password) => {
  if (username === 'margaret_thatcher' && password === 'baz') {
    return {type: LOGIN, username};
  }
  return {type: LOGIN_FAIL};
};

export const logout = () => ({type: LOGOUT});
