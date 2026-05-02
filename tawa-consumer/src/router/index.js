import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/welcome" },

    { path: "/welcome", name: "welcome", component: () => import("@/views/WelcomeView.vue") },
    { path: "/menu", name: "menu", component: () => import("@/views/FoodMenuView.vue") },
    { path: "/summary", name: "summary", component: () => import("@/views/SummaryView.vue") },
    { path: "/payment", name: "payment", component: () => import("@/views/PaymentView.vue") },
    { path: "/end", name: "end", component: () => import("@/views/EndView.vue") },

    // opcional: 404 rápido
    { path: "/:pathMatch(.*)*", redirect: "/welcome" },
  ],
});

export default router;
