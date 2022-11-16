<template>
  <div class="home">
    <AddTodo />
    <List :todos="todos" />
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";
import List from "../components/List.vue";

import AddTodo from "../components/AddTodo.vue";
/* router'daki veriyi yakalabilmek için useRoute'a ihtiyacim var */
import { useRoute } from "vue-router";

export default {
  name: "Home",
  components: {
    List,
    AddTodo,
  },
  setup() {
    const todos = ref([
      { id: 1, todo: "Run outside" },
      { id: 2, todo: "Do homework" },
    ]);
    /* yaptıgımız şey : home sayfasındaki 'todos' u bir ana data
    merkezi olarak kullanip, List.vue'de kullanacagım zaman
    List.vue'e bir props olarak gönderip orada listeleme islemi yapmak */

    const route = useRoute();

    onUpdated(() => {
      todos.value.push({  
        id: Math.floor(Math.random() * 1000),
        todo: route.query.data,
      });
    });

    return {
      todos,
      route,
    };
  },
};
</script>
