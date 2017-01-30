// @flow
import type {Component} from './flow-declarations/vue';

const ContextRoot: Component = {
  name: 'ContextRoot',
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  render(h): Component {
    if (this.$slots.default.length !== 1) {
      throw new Error('ContextRoot should have one child!');
    }
    return this.$slots.default[0];
  },
  created() {
    this.$exposed = this.context;
  },
};

export default ContextRoot;
