const resolveContext = (component, originName) => {
  if (component.$context) {
    return component.$context;
  } else if (component.$parent) {
    return resolveContext(component.$parent, originName);
  }

  throw Error(`$context requested by ${originName} not found in component ` +
              'tree! Try wrapping Provider around your root component.');
};

const getContext = () => ({
  $context() {
    return resolveContext(this.$parent, this.name);
  },
});

const getContextProperties = (properties: Array<string>) =>
  properties.reduce((acc, property: string) => ({
    ...acc,
    [property]() {
      if (!this.$context[property]) {
        throw new Error(`Property "${property}" requested by ${this.$options.name} ` +
                        'could not be resolved in context.');
      }
      return this.$context[property];
    },
  }), {});

export default (properties: Array<string>) => {
  Object.keys(properties).forEach((key) => {
    if (!/\S/.test(properties[key])) {
      throw Error('Cannot bind empty property.');
    }
  });

  return {
    ...getContext(),
    ...getContextProperties(properties),
  };
};
