import Vue from "vue";
import VueRouter from "vue-router";
import PageVue from "../components/pages/PageVue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageVue",
    component: PageVue
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
