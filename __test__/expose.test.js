import Vue from 'vue';
import Context from '../src/context';
import {mockStore} from './utils';

const ContextComponent = Vue.extend(Context);

describe('Expose', () => {
  it('should create $exposed with data from props', () => {
    const properties = {store: mockStore};
    const vm = new ContextComponent({
      propsData: {
        properties,
      },
    });

    expect(vm.$context).toBe(properties);
  });
});

