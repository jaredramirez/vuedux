<template>
  <div>
    <span id="count">{{ countWithSkip }}</span>
    <button id="button-increment" v-on:click="actions.increment()">
      Increment
    </button>
    <button id="button-decrement" v-on:click="actions.decrement()">
      Decrement
    </button>
  </div>
</template>

<script>
const Counter = {
  name: 'Counter',
  props: ['count', 'actions', 'skip'],
  computed: {
    countWithSkip() {
      const skip = this.skip || 0;

      return Array.from(Array(this.count).keys()).reduce(
        (sum, next) => sum + next + skip,
        0,
      );
    },
  },
};

export default Counter;
</script>
