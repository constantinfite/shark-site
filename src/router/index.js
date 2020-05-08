import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Informations from "../views/Informations.vue";
import HowToInteract from "../views/HowToInteract.vue";
import Senses from "../views/Senses.vue";
import Species from "../views/Species.vue";
import GeneralInfo from "../views/GeneralInfo.vue";
import Data from "../views/Data.vue";
import Support from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/informations",
    name: "Informations",
    component: Informations
  },
  {
    path: "/informations/generalinfo",
    name: "GeneralInfo",
    component: GeneralInfo
  },
  {
    path: "/informations/senses",
    name: "Senses",
    component: Senses
  },
  {
    path: "/informations/howtointeract",
    name: "HowToInteract",
    component: HowToInteract
  },
  {
    path: "/species",
    name: "Species",
    component: Species
  },
  {
    path: "/data",
    name: "Data",
    component: Data
  },
  {
    path: "/support",
    name: "Support",
    component: Support
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
