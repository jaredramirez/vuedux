import {EDIT_NAME} from '../actions/types';
import createReducer from './utils';

const initialState = {
  name: 'defaultName',
};

const editName = (state, {name}) => ({name});

export default createReducer(initialState, {
  [EDIT_NAME]: editName,
});

