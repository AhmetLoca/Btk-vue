<template>
  <button @click="clean">Clean</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clean() {
      this.$emit("clean");
    },
  },
};
</script>

<style></style>
