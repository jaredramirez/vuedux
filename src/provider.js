// @flow
import type {Component} from './flow-declarations/vue';
import Expose from './expose';

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
      <Expose properties={this.expose()}>
        {this.$slots.default[0]}
      </Expose>
    );
  },
  methods: {
    expose() {
      return {
        store: this.store,
      };
    },
  },
};

export default Provider;
