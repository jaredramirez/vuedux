// @flow
import {inject} from 'vue-expose-inject';

import type {Connect} from './flow-declarations/vuedux';
import bindContextProperties from './bindContextProperties';
import {transformProps} from './utils';

const connect: Connect = (mapDispatchToProps, mapStateToProps) =>
  (component) => {
    const shouldHandleState = Boolean(mapStateToProps);

    return {
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
        console.log('this', bindContextProperties);
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
        // ...bindContextProperties,
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

export default connect;
