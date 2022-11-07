<template>
  <div class="home">
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.title }}</h2>
      <span>{{ project.details }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      projects: [],
    };
  },
  /* bu sayfa mount oldugunda request yapacagiz*/
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((json) => (this.projects = json))
      .catch((err) => console.log(err.message));
  },
};
</script>
