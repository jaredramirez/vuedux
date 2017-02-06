import _ from 'lodash/fp';

import {ADD_POST, DELETE_POST} from './../actions/types';
import {createReducer} from './utils';

const addPost = (state = {}, {id, todo}) => ({
  ...state,
  [id]: {
    ...todo,
  },
});

const deletePost = (state = {}, {id}) => _.omit(state, id);

const initialState = {
  0: {title: 'first post', body: 'hello everyone, this is my fist post!'},
};

export default createReducer(initialState, {
  [ADD_POST]: addPost,
  [DELETE_POST]: deletePost,
});

