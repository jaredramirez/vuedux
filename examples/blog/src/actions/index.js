import * as postsActions from './posts';
import * as usersActions from './users';
import * as authActions from './auth';

export default {
  ...postsActions,
  ...usersActions,
  ...authActions,
};
