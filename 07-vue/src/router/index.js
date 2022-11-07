import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    /*lazy-loaded. 
  Bütün route 'u sayfa ilk acildiginda vermektense
  ihtiyac oldugu an da "lazy-loaded" olarak performans kazanabiliyoruz.*/
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/students",
    name: "students",
    component: () => import("../views/StudentsView.vue"),
  },
  {
    path: "/students2",
    name: "students2",
    component: () => import("../views/StudentsView2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
