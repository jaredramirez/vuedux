import Vue from 'vue';
import {mount} from 'avoriaz';
import sinon from 'sinon';

import {Provider} from '../../dist/vuedux';
import store, {actionCreators} from '../mockStore';
import App from '../components/App.vue';
import Counter from '../components/Counter.vue';
import AppIncorrect from '../components/AppIncorrect.vue';

describe('App', () => {
  it('should render provider as root', () => {
    const providerElem = mount(App).find(Provider)[0];
    expect(providerElem.is(Provider)).toBe(true);
  });

  it('should render provider as root', () => {
    const providerElem = mount(App).find(Provider)[0];
    expect(providerElem.is(Provider)).toBe(true);
  });

  it('should render child div', () => {
    const providerElem = mount(App).find('#child')[0];
    expect(providerElem.is('div')).toBe(true);
  });

  describe('Counter', () => {
    beforeEach(() => {
      store.dispatch(actionCreators.reset());
    });

    it('should pass in props from redux', () => {
      const counterElem = mount(App).find(Counter)[0];
      expect(counterElem.is(Counter)).toBe(true);
      expect(counterElem.vm.$props.count).toBe(0);
      expect(counterElem.vm.$props.actions.increment).toBeDefined();
    });

    it('should pass in own props and retain reactivity', async () => {
      const wrapper = mount(App);

      wrapper.find('#button-increment')[0].trigger('click');
      wrapper.find('#button-increment')[0].trigger('click');

      await Vue.nextTick();

      wrapper.vm.skip = 2;

      await Vue.nextTick();

      expect(wrapper.find('#count')[0].text()).toBe('5');
    });

    it('should have props.count in span element equal store value', () => {
      const spanElem = mount(App).find('#count')[0];
      const storeCount = store.getState().count;
      expect(spanElem.text()).toBe(storeCount.toString());
    });

    it('should have props.count equal store value after actions', async () => {
      const wrapper = mount(App);
      const childElem = wrapper.find(Counter)[0];

      wrapper.find('#button-increment')[0].trigger('click');
      wrapper.find('#button-increment')[0].trigger('click');
      wrapper.find('#button-decrement')[0].trigger('click');

      await Vue.nextTick();
      const storeCount = store.getState().count;
      expect(childElem.vm.$props.count).toBe(storeCount);
    });
  });
});

describe('AppIncorrect', () => {
  it('should fail when provider has more than 1 child', () => {
    const consoleSpy = sinon.spy(console, 'error');
    const _wrapper = mount(AppIncorrect).find(Provider); // eslint-disable-line
    console.log(consoleSpy.called);
    expect(consoleSpy.called).toBe(true);
  });
});
