<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  projects: Object<{
    name: String;
    route: String;
    reflection: String;
    image: String;
  }>,
});

const route = useRoute();

const fileContent = ref("");

onMounted(async () => {
  const response = await fetch(`projects/${props.projects[route.params.name].reflection}`); // or example.md
  fileContent.value = await response.text();
});
</script>

<template>
  <div class="card">
    <!-- {{ projects.map((value: any) => {
            console.log(value)
            if (value.route === $route.params.name){
                return value.name;
            }
        }) }} -->
    <h1>{{ projects[$route.params.name].name }}</h1>
    <img :src="`projects/${projects[$route.params.name].image}`" />
    <RouterLink
      custom
      v-slot="{ navigate }"
      :to="`${projects[$route.params.name].next}`"
      ><button @click="navigate" role="link">Continue</button></RouterLink
    >
    <pre>{{ fileContent }}</pre>
  </div>
</template>

<style scoped>
img {
  max-width: 35em;
}
</style>
