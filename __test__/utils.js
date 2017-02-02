export const mockStore = {
  subscribe: 'mockSubscribe',
  dispatch: () => 'dispatch',
  getState() {
    return {
      todos: [
        {text: 'one'},
        {text: 'two'},
        {text: 'three'},
      ],
    };
  },
};

export const exposedProperties = {
  store: mockStore,
};
