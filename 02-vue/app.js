const app = Vue.createApp({
  template: `
    <h2> title : {{ title }}</h2>
    <h3> description : {{ description }}</h3>
    <h4> comments : {{ comments }}</h4>
    <button @click="add()">Increment</button>
  `,
  data() {
    return {
      title: "I like vue",
      description: "This is a description",
      comments: 8,
    };
  },
  methods: {
    add() {
      this.comments++;
    },
  },
}).mount("#app");
