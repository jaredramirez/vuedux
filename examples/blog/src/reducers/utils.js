// eslint-disable-next-line import/prefer-default-export
export const createReducer = (initialState, handlers) =>
(state = initialState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

