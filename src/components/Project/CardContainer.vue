<script lang="ts" setup>
  import { projects } from '@/src/composables/useProjects'
</script>

<template>
  <section
    class="flex w-full flex-col items-stretch justify-center gap-10 lg:w-1/2"
  >
    <div class="flex w-fit flex-col gap-8">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.name"
      />
    </div>
  </section>
</template>
