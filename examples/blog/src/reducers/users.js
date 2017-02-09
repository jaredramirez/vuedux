import _ from 'lodash/fp';

import {ADD_USER, DELETE_USER} from './../actions/types';
import {createReducer} from './utils';

const addUser = (state = {}, {id, user}) => ({
  ...state,
  [id]: {
    ...user,
  },
});

const deleteUser = (state = {}, {id}) => _.omit(state, id);

const initialState = {
  0: {username: 'mararet_thatcher', password: 'baz'},
};

export default createReducer(initialState, {
  [ADD_USER]: addUser,
  [DELETE_USER]: deleteUser,
});

