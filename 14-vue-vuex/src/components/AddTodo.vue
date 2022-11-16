<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="add todo.." v-model="todo" />
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const todo = ref("");

    const addTodo = () => {
      /* commit dedigim zaman mutations icerisindeki metotlara erisebiliyorum
        commit içerisine 2 şey alıyor.
        1.metot ismi(string seklinde)
        2.payload (veri)
      */
      store.commit("addTodoStore", { newTodo: todo.value, done: false });
    };
    return { addTodo, todo };
  },
};
</script>

<style></style>
