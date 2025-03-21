import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Aesthetic from "./components/Aesthetic.vue";
import ProjectSlide from "./components/ProjectSlide.vue";

// const artProjectsObject = import.meta.glob("./assets/art/*{png,jpg,jpeg,svg}");
// const artProjects = Object.keys(artProjectsObject).map((value) => {
//   return value.substring(value.lastIndexOf("/") + 1);
// });
// console.log(artProjects);

const artProjects = {
  "default": {
    name: "Template",
    route: "default",
    reflection: "template.txt",
    image: "parchment.png",
    next: "brainroot",
  },
  "brainroot": {
    name: "Brainroot",
    route: "brainroot",
    reflection: "brainroot.txt",
    image: "brainroot.jpeg",
    next: "default"
  }
};

const routes = [
  {
    path: "/",
    component: HelloWorld,
    props: {
      msg: "Donovan's Portfolio",
    },
  },
  {
    path: "/aesthetic",
    component: Aesthetic,
    props: {
      firstProject: artProjects["brainroot"].route,
    },
  },
  {
    path: "/project/:name",
    component: ProjectSlide,
    props: {
      projects: artProjects,
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

document.body.style.backgroundImage = "url('/circuit-faded.png')";
createApp(App).use(router).mount("#app");
