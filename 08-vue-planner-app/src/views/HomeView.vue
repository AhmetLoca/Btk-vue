<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-for="project in filteredProjects" :key="project">
      <SimpleProject
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>

<script>
import SimpleProject from "../components/SimpleProject.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "HomeView",
  components: {
    SimpleProject,
    FilterNav,
  },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((json) => (this.projects = json))
      .catch((err) => console.log(err.message));
  },
  methods: {
    /* delete işlemi */
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    /* done işlemi */
    handleComplete(id) {
      let p = this.projects.find((project) => project.id === id);
      p.complete = !p.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
