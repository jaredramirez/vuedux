import Vue from 'vue';
import Context from '../src/context';
import bindContextProperties from '../src/context/bindContextProperties';
import mockStore from './mockStore';

const ContextComponent = Vue.extend(Context);

describe('bindContextProperties', () => {
  const contextProperties = {store: mockStore};
  const parent = new ContextComponent({
    propsData: {
      properties: contextProperties,
    },
  });

  it('should link $context to component', () => {
    const child = new Vue({
      parent,
      computed: {
        ...bindContextProperties([]),
      },
    });

    expect(child.$context).toBe(contextProperties);
  });

  it('should link requested properties to component', () => {
    const child = new Vue({
      parent,
      computed: {
        ...bindContextProperties(['store']),
      },
    });

    expect(child.store).toBe(mockStore);
  });

  it('should link requested properties to deeply nested component', () => {
    const child1 = new Vue({
      parent,
    });
    const child2 = new Vue({
      parent: child1,
    });
    const child3 = new Vue({
      parent: child2,
    });
    const child4 = new Vue({
      parent: child3,
      computed: {
        ...bindContextProperties(['store']),
      },
    });

    expect(child4.store).toBe(mockStore);
  });

  it('thow error if requested property does not exist', () => {
    expect(() => {
      const child = new Vue({
        parent,
        computed: {
          ...bindContextProperties(['punk']),
        },
      });
      return child.punk;
    }).toThrow();
  });
});
