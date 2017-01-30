type Component = {
  extend: (options: Object) => Function;

  $el: any; // so that we can attach __vue__ to it
  data: Object;
  options: any;
  parent: Component | void;
  root: Component;
  children: Array<Component>;
  refs: { [key: string]: Component | Array<Component> | void };
  slots: { [key: string]: Array<any> };
  scopedSlots: { [key: string]: () => any };
  vnode: any;
  isServer: boolean;

  $mount: (el?: any | string, hydrating?: boolean) => Component;
  $forceUpdate: () => void;
  destroy: () => void;
  set: (obj: Array<mixed> | Object, key: mixed, val: mixed) => void;
  delete: (obj: Object, key: string) => void;
  watch: (expOrFn: string | Function, cb: Function, options?: Object) => Function;
  on: (event: string, fn: Function) => Component;
  once: (event: string, fn: Function) => Component;
  off: (event?: string, fn?: Function) => Component;
  emit: (event: string, ...args: Array<mixed>) => Component;
  $nextTick: (fn: Function) => void;
  $createElement: (tag?: string | Component, data?: Object, children?: any) => any;

  data: () => Object;
  render: () => any;
}

export default {
  Component,
};
