const app = Vue.createApp({
  template: `
    <div :style="renk">Deneme yazisi</div>
    `,
  data() {
    return {
      renk: "color:green",
    };
  },
  methods: {},
});

app.mount("#app");
