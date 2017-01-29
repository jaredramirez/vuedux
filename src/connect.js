import {inject} from 'vue-expose-inject';

const transformProps = props => (
  typeof props === typeof []
    ? props.reduce((acc, cur) => {
      const obj = {...acc};
      obj[cur] = null;
      return obj;
    }, {})
    : props
);

export default (mapDispatchToProps, mapStateToProps, component) => ({
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
        ...mapStateToProps(this.state, this.$options.propsData),
        ...mapDispatchToProps(this.store.dispatch, this.$options.propsData),
      },
    });
  },
  computed: {...inject(['store'])},
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
