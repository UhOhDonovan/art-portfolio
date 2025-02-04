import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Aesthetic from "./components/Aesthetic.vue";
import ProjectSlide from "./components/ProjectSlide.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
    props: {
      msg: "Donovan's Portfolio",
    },
  },
  { path: "/aesthetic", component: Aesthetic },
  {path: "/project/:name", component: ProjectSlide, props: true}
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

document.body.style.backgroundImage = "url('/circuit-faded.png')";
createApp(App).use(router).mount("#app");
