<template>
  <div>
    <span id="count">{{ count }}</span>
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
  props: ['count', 'actions'],
}

export default Counter;
</script>
