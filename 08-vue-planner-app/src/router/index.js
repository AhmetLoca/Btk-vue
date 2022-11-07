import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddProject",

    component: () => import("../views/AddProject.vue"),
  },
  {
    /*hangi projeyi secersem onun id'siyle gidecegim icin ":id" dedim. */
    path: "/projects/:id",
    name: "EditProject",
    component: () => import("../views/EditProject.vue"),
    /* id ile geldigim zaman props'lari da alabilmek istiyorsam
      props:true diyorum.
    */
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
