import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cats",
      name: "cats",
      component: () => import("../views/CatsView.vue"),
    },
    {
      path: "/cats/:catId",
      name: "cat",
      component: () => import("../views/CatView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: "/users/:id",
      name: "user",
      component: () => import("../views/UserView.vue"),
      props: () => ({
        hobby: "卵割",
      }),
    },
  ],
});

export default router;
