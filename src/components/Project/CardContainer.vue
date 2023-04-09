<script lang="ts" setup>
  import { projects } from '@/src/composables/useProjects'
</script>

<template>
  <section class="flex w-full flex-col items-start justify-center gap-10">
    <div
    
      class="relative grid w-fit grid-cols-3 flex-col place-items-center gap-x-8 gap-y-10"
    >
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

    <h1 class="font-italiana text-7xl font-bold">Meus Projetos</h1>
  </section>
</template>
