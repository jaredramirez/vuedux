import {combineReducers} from 'redux';
import posts from './posts';
import postsIds from './postsIds';
import users from './users';
import usersIds from './usersIds';

export default combineReducers({
  posts,
  postsIds,
  users,
  usersIds,
});
