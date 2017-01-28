import {combineReducers} from 'redux';
import meta from './meta';
import todos from './todos';

export default combineReducers({
  meta,
  todos,
});
