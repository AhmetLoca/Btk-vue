<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h3>{{ title }}</h3>
  
  <input type="text" ref="name" />
  <input type="text" ref="password" />
  <button @click="login">Login</button>
  <br />
  <p v-if="isLogin">Login Successed</p>
  <p v-else>Login failed</p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Login",
      name: "ahmet",
      password: "123",
      isLogin: false,
    };
  },
  methods: {
    login() {
      return this.$refs.name.value === this.name &&
        this.$refs.password.value === this.password
        ? (this.isLogin = true)
        : (this.isLogin = false);
    },
  },
};
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
