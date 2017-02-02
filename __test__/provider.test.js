import Vue from 'vue';
import Provider from '../src/provider';
import {mockStore} from './utils';

const ProviderComponent = Vue.extend(Provider);

describe('Provider', () => {
  it('should have store as prop', () => {
    const vm = new ProviderComponent({
      propsData: {
        store: mockStore,
      },
    });

    expect(vm.$options.propsData.store).toBe(mockStore);
  });
});

