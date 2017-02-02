import Vue from 'vue';
import Expose from '../src/expose';
import {mockStore} from './utils';

const ExposeComponent = Vue.extend(Expose);

describe('Expose', () => {
  it('should create $exposed with data from props', () => {
    const properties = {store: mockStore};
    const vm = new ExposeComponent({
      propsData: {
        properties,
      },
    });

    expect(vm.$exposed).toBe(properties);
  });
});

