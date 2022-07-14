import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import rankRoute from "./rank";

const router = createRouter({
  history: createWebHashHistory(),
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
      meta: {
        title: "首页",
      },
      layout: "MainLayout",
    },
    rankRoute,
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
