<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h3>{{ title }}</h3>
  <input type="text" ref="name" /><br />
  <input type="password" ref="password" /><br />
  <button @click="selectTag">Login</button>
  <p v-if="isLogin">Login is succeed</p>
  <p v-else>Login is failed</p>
  <hr />
  <Button @clean="cleanInput" />
  <input type="text" ref="inputText" />
  <hr />
  <Title :titleText="text2" />
  <Title :text="text" />
  <hr />
  <Form />
</template>

<script>
import Button from "./components/ButtonView.vue";
import Title from "./components/TitleView.vue";
import Form from "./components/FormView.vue";

export default {
  name: "App",
  components: {
    Button,
    Title,
    Form,
  },
  data() {
    return {
      title: "Bu bizim uygulamamiz",
      name: "ahmet",
      password: "1234",
      isLogin: false,
      text2: "Vue3 ile",
      text: "Vue2",
    };
  },
  methods: {
    selectTag() {
      return this.$refs.name.value === this.name &&
        this.$refs.password.value === this.password
        ? (this.isLogin = true)
        : (this.isLogin = false);
    },
    cleanInput() {
      this.$refs.inputText.value = "";
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
