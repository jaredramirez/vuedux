// @flow
import {inject} from 'vue-expose-inject';

import type {Connect} from './flow-declarations/vuedux';
import transformProps from './utils';

const connect: Connect = (mapDispatchToProps, mapStateToProps, component) => ({
  name: `connect-${component.name}`,
  props: {
    ...transformProps(component.props),
  },
  data() {
    return {
      state: null,
    };
  },
  render(h) {
    return h(component, {
      props: {
        ...this.$options.propsData,
        ...this.stateToProps,
        ...this.dispatchToProps,
      },
    });
  },
  computed: {
    ...inject(['store']),
    stateToProps() {
      return mapStateToProps
        ? mapStateToProps(this.state, this.$options.propsData)
        : {};
    },
    dispatchToProps() {
      return mapDispatchToProps
        ? mapDispatchToProps(this.store.dispatch, this.$options.propsData)
        : {};
    },
  },
  methods: {
    updateState() {
      this.state = this.store.getState();
    },
  },
  created() {
    const {updateState} = this;
    this.unsubscribe = this.store.subscribe(updateState);
    updateState();
  },
  destroyed() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
});

export default connect;
