import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discount from "../views/Discount.vue";
import Chart from "../views/Chart.vue";
import Message from "../views/Message.vue";
import Settings from "../views/Settings.vue";
import Store from "../views/Store.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/discount",
      name: "discount",
      component: Discount,
    },
    {
      path: "/chart",
      name: "chart",
      component: Chart,
    },
    {
      path: "/message",
      name: "message",
      component: Message,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/store",
      name: "store",
      component: Store,
    },
  ],
});

export default router;
