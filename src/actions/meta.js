import {EDIT_NAME} from './types';

const editName = name => ({
  type: EDIT_NAME,
  name,
});

export default {
  editName,
};
