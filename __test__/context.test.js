import Vue from 'vue';
import Context from '../src/context';
import mockStore from './mockStore';

const ContextComponent = Vue.extend(Context);

describe('Context', () => {
  it('should create $context with data from props', () => {
    const properties = {store: mockStore};
    const vm = new ContextComponent({
      propsData: {
        properties,
      },
    });

    expect(vm.$context).toBe(properties);
  });
});

