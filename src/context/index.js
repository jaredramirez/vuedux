// @flow
import type {Component} from './../flow-declarations/vue';

const Context: Component = {
  name: 'Context',
  props: {
    properties: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    if (this.$slots.default.length !== 1) {
      throw new Error('Context should have one child!');
    }
    return this.$slots.default[0];
  },
  created() {
    this.$context = this.properties;
  },
};

export default Context;
