<template>
  <div class="container">
    <div class="sub">
      <h3 class="header">{{title}}</h3>
    </div>
    <span v-for="todo in todos">
      {{todo.text}}
    </span>
  </div>
</template>

<script>
const ReadOnlyList = {
  name: 'ReadOnlyList',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: Array,
  },
};
export default ReadOnlyList;
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .sub {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .header {
    margin-right: 15px;
  }
</style>
