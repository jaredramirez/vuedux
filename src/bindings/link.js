import {inject} from 'vue-expose-inject';

// const initMapStateToProps = (func, store) => {
// };

// determine method used to declare props
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
  render(h) {
    console.log('link', mapStateToProps(this.store.getState()));
    return h(component, {
      props: {
        ...this.$options.propsData,
        ...mapStateToProps(this.store.getState()),
      },
    });
  },
  computed: {
    ...inject(['store']),
  },
});
