const rankRoute = {
  path: "/rank",
  name: "rank",
  redirect: "/index",
  component: () => import("../views/ChildView.vue"),
  layout: "MainLayout",
  meta: {
    title: "排行榜",
  },
  children: [
    {
      path: "/rank",
      name: "rankIndex",
      component: () => import("../views/Rank/index.vue"),
      meta: {
        keepAlive: true,
        type: "menu",
      },
    },
    {
      path: "rank-detail",
      name: "rankDetail",
      layout: "MainLayout",
      component: () => import("../views/RankDetail/index.vue"),
    },
  ],
};

export default rankRoute;
