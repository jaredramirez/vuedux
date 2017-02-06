import _ from 'lodash/fp';

import {ADD_POST, DELETE_POST} from './../actions/types';
import {createReducer} from './utils';

const addPost = (state = [], {id}) => [
  ...state,
  id,
];

const deletePost = (state = [], {id}) => _.filter(state, curId => curId !== id);

const initialState = [0];

export default createReducer(initialState, {
  [ADD_POST]: addPost,
  [DELETE_POST]: deletePost,
});

