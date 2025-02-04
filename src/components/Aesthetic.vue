<script setup lang="ts">
defineProps<{
  firstProject: string;
}>();
</script>

<template>
  <div class="card">
    <h1>My Personal Aesthetic</h1>
    <div class="content">
      <p>
        I love comics and animation. I am a sucker for simple yet interesting
        character designs contrasted with unique environments, and complex
        lighting. My favorite pieces of artistic work come from Studio Ghibli
        and their animated movies. Movies like Castle in the Sky sported
        animation that was way ahead of its time. I also have a huge soft spot
        for Calvin and Hobbes. I love the way Watterson maintains very simple
        illustrations in scenes where Calvin is in reality, but the drawings of
        his imagination are incredibly complex and sometimes beautiful, making
        use of water color to paint the sky. I think a cohesive art direction is
        the factor that usually makes an artistic work great. Even the use of
        ugliness can be beautiful in works when they're integrated into the
        overall art direction, especially in horror or depictions of dark
        events. Overall, the art needs to service the story that it is apart of.
        If the art takes away from the story, or even if it is generally neutral
        with its effects on the story, I find myself having a difficult time
        enjoying it simply for its artistic merit.
      </p>
    </div>
    <RouterLink custom v-slot="{ navigate }" :to="`project/${firstProject}`"
      ><button @click="navigate" role="link">Continue</button></RouterLink
    >
  </div>
</template>

<style scoped>
.content {
  color: black;
  background-color: beige;
  border-radius: 8px;
  margin: 0.1em 1em;
}
</style>
