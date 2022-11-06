const app = Vue.createApp({
  template: `
   <h3>Frameworks</h3>
    <ul>
      <li 
        v-for="framework in frameworks"
        class="list"
        :class="{selected : framework.selected}"
        @click="selectTag(framework)"
      >
      {{framework.name}} - {{framework.selected}}
      </li>
    </ul>
    <h3>Selected Frameworks</h3>
    <ul v-for="selected in selectTags" >
      <li>{{selected.name}}</li>
    </ul>

  `,
  data() {
    return {
      frameworks: [
        { name: "Vue", selected: true },
        { name: "React", selected: false },
        { name: "Angular", selected: true },
        { name: "Svelte", selected: false },
      ],
    };
  },
  methods: {
    selectTag(framework) {
      framework.selected = !framework.selected;
    },
  },
  computed: {
    selectTags() {
      return this.frameworks.filter((i) => i.selected);
    },
  },
});

app.mount("#app");
