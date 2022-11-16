<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="myTodo" />
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const myTodo = ref(null);
    const router = useRouter();

    const addTodo = () => {
      router.push({ path: "/", query: { data: myTodo.value } });
      myTodo.value = "";
    };
    return { addTodo, myTodo };
  },
};
</script>

<style></style>
