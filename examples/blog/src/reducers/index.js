import {combineReducers} from 'redux';
import auth from './auth';
import posts from './posts';
import postsIds from './postsIds';
import users from './users';
import usersIds from './usersIds';

export default combineReducers({
  auth,
  posts,
  postsIds,
  users,
  usersIds,
});
