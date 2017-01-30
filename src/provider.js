// @flow
import {expose} from 'vue-expose-inject';
import type {Component} from './flow-declarations/vue';

const Provider: Component = {
  name: 'Provider',
  extends: expose,
  props: {
    store: {
      type: null,
      required: true,
    },
  },
  render(h): Component {
    if (this.$slots.default.length !== 1) {
      throw new Error('Provider should have one child!');
    }
    return this.$slots.default[0];
  },
  expose: ['store'],
};

export default Provider;
