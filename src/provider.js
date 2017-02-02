// @flow
import type {Component} from './flow-declarations/vue';
import Context from './context';

const Provider: Component = {
  name: 'Provider',
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
    return (
      <Context properties={this.context()}>
        {this.$slots.default[0]}
      </Context>
    );
  },
  methods: {
    context() {
      return {
        store: this.store,
      };
    },
  },
};

export default Provider;
