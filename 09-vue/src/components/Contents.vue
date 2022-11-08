<template>
  <div>
    <div v-for="content in contents" :key="content.id">
      {{ content.title }}
    </div>
    <div v-if="err">
      {{ err }}
    </div>
  </div>
</template>

<script>
import getContentsFetch from "../composables/getContentsFetch";
import { useRoute, useRouter } from "vue-router";
export default {
  props: ["contents"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    /*
Bir Route içerisindeki özelliklere params,meta,name,path gibi 
özelliklere erişmek için Route.

Router -> back, go , push, forward gibi özellikleri kullanabilemek için
Router'u kullanacagiz.
*/
    console.log("Route:", route);
    console.log("Router:", router);

    const { contents, err, getContents } = getContentsFetch();
    getContents();
    return {
      contents,
      err,
    };
  },
};
</script>

<style></style>
