import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Landing.vue";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Resources from "../views/Resources.vue";
import Glossary from "../views/Glossary.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("../views/Landing.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/dashboard/:topicId",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
      props: true
    },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: () => import("../views/Dashboard.vue"),
    //   props: true
    // },
    {
      path: "/resources",
      name: "resources",
      component: () => import("../views/Resources.vue"),
    },
    {
      path: "/flowchart",
      name: "flowchart",
      component: () => import("../views/Context.vue"),
    },
    {
      path: "/glossary",
      name: "glossary",
      component: () => import("../views/Glossary.vue"),
    },
  ],
});

export default router;
