<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Contents :contents="contents" />
  </div>
</template>

<script>
import Contents from "../components/Contents.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    Contents,
  },
  setup() {
    const contents = ref([
      { id: 1, title: "Workout-1", details: "Details-1" },
      { id: 2, title: "Workout-2", details: "Details-2" },
      { id: 3, title: "Workout-3", details: "Details-3" },
      { id: 4, title: "Workout-4  ", details: "Details-4" },
    ]);
    return {
      contents,
    };
  },
};
</script>
