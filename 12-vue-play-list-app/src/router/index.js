import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    /* lazy loading */
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    /* lazy loading */
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/playlist/create",
    name: "createplaylist",
    /* lazy loading */
    component: () => import("../views/playlists/CreatePlayList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
