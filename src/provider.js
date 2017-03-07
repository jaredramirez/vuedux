// @flow
import type {Component} from './flow-declarations/vue';

const Provider: Component = {
  name: 'Provider',
  provide() {
    return {
      store: this.store,
    };
  },
  props: {
    store: {
      type: Object,
      required: true,
      validator(store) {
        return Boolean(store.subscribe) && Boolean(store.dispatch) && Boolean(store.getState);
      },
    },
  },
  render(h) {
    if (this.$slots.default.length !== 1) {
      throw new Error('Provider should have one child!');
    }
    return this.$slots.default[0];
  },
};

export default Provider;
