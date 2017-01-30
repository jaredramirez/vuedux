// @flow
import type {Component} from './flow-declarations/vue';

const Expose: Component = {
  name: 'Expose',
  props: {
    properties: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    if (this.$slots.default.length !== 1) {
      throw new Error('Expose should have one child!');
    }
    return this.$slots.default[0];
  },
  created() {
    this.$exposed = this.properties;
  },
};

export default Expose;
