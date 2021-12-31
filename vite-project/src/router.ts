import { createRouter, createWebHistory } from "vue-router";
import CharacterView from "./views/CharacterView.vue";
import HomeView from "./views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/character", name: "character", component: CharacterView },
  ],
});

export default router;
