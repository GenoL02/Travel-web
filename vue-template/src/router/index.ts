import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("../views/DiscoverView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutUsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgotPassView.vue"),
  },
  {
    path: "/list-news",
    name: "list-news",
    component: () => import("../views/ListNewsView.vue"),
  },
  {
    path: "/create-news",
    name: "create-news",
    component: () => import("../views/CreateNewsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
