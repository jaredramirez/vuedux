const resolveContext = (component) => {
  if (component.$exposed) {
    return component.$exposed;
  } else if (component.$parent) {
    return resolveContext(component.$parent);
  }

  throw Error('$exposed not found in component tree!');
};

const getContext = () => ({
  $exposed() {
    return resolveContext(this.$parent);
  },
});

const getContextProperties = (properties: Array<string>) =>
  properties.reduce((acc, property: string) => ({
    ...acc,
    [property]() {
      console.log(this.$exposed);
      return this.$exposed[property];
    },
  }), {});

export default (properties: Array<string>) => ({
  ...getContext(),
  ...getContextProperties(properties),
});
