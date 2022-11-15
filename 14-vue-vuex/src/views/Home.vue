<template>
  <div class="home">Home</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const todos = ref([
      { id: 1, todo: "Ders calis" },
      { id: 1, todo: "Film izle" },
    ]);
    return {
      todos,
    };
  },
};
</script>
