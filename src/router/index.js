import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      layout: "MainLayout",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home/index.vue"),
      layout: "MainLayout",
    },
  ],
});

router.bef;

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta?.title || "小熊音乐";
  if (to.path === "/") {
    next({ path: "home" });
  } else {
    next();
  }
});
export default router;
