// @flow
import type {Component} from './flow-declarations/vue';
import ContextRoot from './contextRoot';

const Provider: Component = {
  name: 'Provider',
  props: {
    store: {
      type: null,
      required: true,
    },
  },
  render(h) {
    if (this.$slots.default.length !== 1) {
      throw new Error('Provider should have one child!');
    }
    return (
      <ContextRoot context={this.getContext()}>
      {this.$slots.default[0]}
      </ContextRoot>
    );
  },
  methods: {
    getContext() {
      return {
        store: this.store,
      };
    },
  },
  created() {
    if (this.expose) {
      this.$exposed = this.expose.call(this);
    }
  },
};

export default Provider;
