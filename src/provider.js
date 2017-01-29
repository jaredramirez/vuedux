import {expose} from 'vue-expose-inject';

export default {
  name: 'Provider',
  extends: expose,
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
    return this.$slots.default[0];
  },
  expose: ['store'],
};
