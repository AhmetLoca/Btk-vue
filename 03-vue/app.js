const app = Vue.createApp({
  template: `
        <ul>
            <li v-for="day in days">{{day}}</li>
        </ul>
        <ul>
        <li v-for="person in persons">{{person.name}}</li>
        </ul>
    `,
  data() {
    return {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      persons: [
        { name: "Ahmet", salary: 4235 },
        { name: "Varol", salary: 2235 },
        { name: "Deniz", salary: 6235 },
      ],
    };
  },
  methods: {},
});

app.mount("#app");
