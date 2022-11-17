<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="add todo.." v-model="todo" />
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vue";

export default {
  setup() {
    const store = useStore();
    const todo = ref("");

    const addTodo = () => {
      const objectTodo = {
        newTodo: todo.value,
        done: true,
      };
      store.commit("addTodoStore", objectTodo);
      store.dispatch("addTodoAction", objectTodo);
    };

    return {
      addTodo,
      todo,
    };
  },
};

/*
const addTodo = () => {
      store.commit("addTodoStore", { newTodo: todo.value, done: false });
    };
*/
</script>

<style></style>
