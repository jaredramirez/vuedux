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
  name: 'Link',
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
  methods: {
    updateState() {
      this.state = this.store.getState();
    },
  },
  computed: {
    ...inject(['store']),
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
