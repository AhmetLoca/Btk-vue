<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'students' }">Students</router-link> |
    <router-link :to="{ name: 'students2' }">Students2</router-link>
  </nav>
  <div>
    <span @click="back">BACK</span>
    <span @click="homepage">Homepage</span>
    <span @click="forward">FORWARD</span>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    homepage() {
      this.$router.push({ name: "home" });
    },
    forward() {
      this.$router.go(+1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
span {
  padding: 20px;
  cursor: pointer;
}
</style>
