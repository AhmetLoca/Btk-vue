<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="todo" />
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const todo = ref(null);
    const router = useRouter();

    const addTodo = () => {
      /* Burada yazdigim query'i bir metot yardimiyla dinleyip(onUpdated) Home.vue'a aktariyorum */
      router.push({ path: "/", query: { data: todo.value } });
      todo.value = "";
    };

    return {
      todo,
      addTodo,
    };
  },
};
</script>

<style></style>
