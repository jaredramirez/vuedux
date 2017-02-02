import Vue from 'vue';
import Context from '../src/context';
import bindContextProperties from '../src/context/bindContextProperties';
import {contextProperties} from './utils';

const ContextComponent = Vue.extend(Context);

describe('bindContextProperties', () => {
  const parent = new ContextComponent({
    propsData: {
      properties: contextProperties,
    },
  });

  it('should link $context to current component', () => {
    const child = new Vue({
      parent,
      computed: {
        ...bindContextProperties([]),
      },
    });

    expect(child.$context).toBe(contextProperties);
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
