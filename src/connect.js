// @flow
import type {ConnectCreator} from './flow-declarations/vuedux';
import {normalizeProps} from './utils';

const connectCreator: ConnectCreator = (mapDispatchToProps, mapStateToProps) =>
  (component) => {
    const shouldHandleState = Boolean(mapStateToProps);

    return {
      name: `connect-${component.name}`,
      inject: ['store'],
      data() {
        return {
          state: null,
        };
      },
      props: {
        ...normalizeProps(component.props),
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
        if (!shouldHandleState) {
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
    };
  };

export default connectCreator;
