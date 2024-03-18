import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Root.vue"),
    },
    {
      path: "/test-1",
      component: () => import("@/views/Test1.vue"),
    },
  ],
});
