import Vue from 'vue';
import Expose from '../src/expose';
import bindContextProperties from '../src/bindContextProperties';
import {exposedProperties, mockStore} from './utils';

const ExposeComponent = Vue.extend(Expose);

describe('bindContextProperties', () => {
  it('should link $exposed to current component', () => {
    const parent = new ExposeComponent({
      propsData: {
        properties: exposedProperties,
      },
    });

    const child = new Vue({
      parent,
      computed: {
        ...bindContextProperties([]),
      },
    });

    expect(child.$exposed).toBe(exposedProperties);
  });

  it('should bind properties to current component', () => {
    const parent = new ExposeComponent({
      propsData: {
        properties: exposedProperties,
      },
    });

    const child = new Vue({
      parent,
      computed: {
        ...bindContextProperties(['store']),
      },
    });

    expect(child.store).toBe(mockStore);
  });
});
