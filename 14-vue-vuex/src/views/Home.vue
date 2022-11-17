<template>
  <List />
  <AddTodo />
  <TodoCount />
</template>

<script>
import List from "../components/List.vue";
import TodoCount from "../components/TodoCount.vue";
import AddTodo from "../components/AddTodo.vue";

export default {
  components: {
    List,
    AddTodo,
    TodoCount,
  },
};
</script>

<style></style>
