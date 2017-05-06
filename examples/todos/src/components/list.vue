<template>
  <div class="container">
    <div class="sub">
      <h3 class="header">{{title}}</h3>
      <input
        type="button"
        value="add" 
        v-on:click="onClick()"
      />
    </div>
    <span v-for="todo in todos">
      {{todo.text}}
    </span>
  </div>
</template>

<script>
const List = {
  name: 'List',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: Array,
    actions: Object,
  },
  methods: {
    onClick() {
      this.actions.addTodo({text: 'Next', completed: false});
    },
  },
};
export default List;
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
  .button {
    margin-left: 15px;
  }
</style>
