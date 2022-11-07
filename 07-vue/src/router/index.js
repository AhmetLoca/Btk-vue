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
  {
    path: "/students/:id",
    name: "studentInfo",
    component: () => import("../views/StudentInfo.vue"),
    props: true,
  },
  {
    path: "/student",
    redirect: "/students",
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
