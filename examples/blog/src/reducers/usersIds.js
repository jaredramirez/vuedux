import _ from 'lodash/fp';

import {ADD_USER, DELETE_USER} from './../actions/types';
import {createReducer} from './utils';

const addUser = (state = [], {id}) => [
  ...state,
  id,
];

const deleteUser = (state = [], {id}) => _.filter(state, curId => curId !== id);

const initialState = [0];

export default createReducer(initialState, {
  [ADD_USER]: addUser,
  [DELETE_USER]: deleteUser,
});

