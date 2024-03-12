<script lang="ts" setup>
const { projects } = useProjects()
</script>

<template>
  <section
    class="flex w-full flex-col items-stretch justify-center gap-10 lg:w-1/2"
  >
    <div
      id="container"
      class="flex w-fit flex-col gap-2"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
  #container:has(article:hover) article:not(:hover) {
    opacity: 0.6;
  }
</style>
