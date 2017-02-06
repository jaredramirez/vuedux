import {combineReducers} from 'redux';
import posts from './posts';
import postsIds from './postsIds';

export default combineReducers({
  posts,
  postsIds,
});
