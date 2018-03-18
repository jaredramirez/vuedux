// @flow
import type {Component} from './flow-declarations/vue';
import type {ConnectCreator} from './flow-declarations/vuedux';
import {normalizeProps} from './utils';

const connectCreator: ConnectCreator = (mapStateToProps, mapDispatchToProps) =>
  (component: Component) => ({
    name: `connect-${component.name}`,
    inject: ['store'],
    data: () => ({
      state: null,
    }),
    props: {...normalizeProps(component.props)},
    render(h) {
      return h(component, {
        on: this._events,
        props: {
          ...this.$props,
          ...this.stateToProps,
          ...this.dispatchToProps,
        },
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default);
    },
    computed: {
      stateToProps() {
        if (mapStateToProps) {
          return mapStateToProps(this.state, this.$options.propsData);
        }
        return {};
      },
      dispatchToProps() {
        if (mapDispatchToProps) {
          return mapDispatchToProps(this.store.dispatch, this.$options.propsData);
        }
        return {};
      },
    },
    methods: {
      updateState() {
        this.state = this.store.getState();
      },
    },
    created() {
      if (!mapStateToProps) {
        return;
      }

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

export default connectCreator;
