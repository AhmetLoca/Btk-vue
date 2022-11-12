import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",

    component: () => import("../views/Create.vue"),
  },
  {
    path: "/update/:id",
    name: "update",

    component: () => import("../views/Update.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
