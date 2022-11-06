const app = Vue.createApp({
  template: `
   <h3> Frameworks </h3>
    <ul>
      <li 
        v-for="framework in frameworks"
        class="list"
        :class="{selected:framework.selected}"
        @click="selectTag(framework)"
      >
      {{framework.name}} - {{framework.selected}}
      </li>
    </ul>
    
    <h4>Selected Frameworks </h4>
    <ul>
      <li v-for="selected in selectTags">
        {{selected.name}}
      </li>
    </ul>
  `,
  data() {
    return {
      frameworks: [
        { name: "Vue", selected: true },
        { name: "React", selected: false },
        { name: "Angular", selected: true },
        { name: "Svelte", selected: true },
      ],
    };
  },
  methods: {
    //Buradaki parametre farklı bir isim olabilir.
    //Bir parametre firlatiyor.
    //Bu firlatilan parametre yukarida kullaniliyor.
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
