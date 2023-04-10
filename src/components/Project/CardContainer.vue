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

      <a
        class="border-secondary-700 flex h-40 w-full items-center justify-center gap-2 border p-5 font-semibold"
        href="https://github.com/davsilvam"
        target="_blank"
      >
        Visitar GitHub <IconGitHub class="w-5" />
      </a>
    </div>
  </section>
</template>
