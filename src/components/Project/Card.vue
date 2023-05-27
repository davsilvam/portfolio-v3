<script lang="ts" setup>
  import { ArrowRight } from 'lucide-vue-next'
  import { Project } from '../../composables/useProjects'

  const props = defineProps<{
    project: Project
  }>()

  interface Technologies {
    [tech: string]: {
      name: string
      background: string
      border: string
    }
  }

  const technologies: Technologies = {
    Vue: {
      name: 'Vue',
      background: 'bg-green-400',
      border: 'border-green-300'
    },
    TypeScript: {
      name: 'TypeScript',
      background: 'bg-blue-400',
      border: 'border-blue-300'
    }
  }

  const tech = technologies[props.project.language]
</script>

<template>
  <article
    class="bg-dusk text-zenith flex w-full flex-col justify-between gap-3 p-8 transition-all ease-in hover:scale-105"
  >
    <div class="flex flex-col gap-1">
      <strong class="text-lg font-bold">
        {{ project.name }}
      </strong>

      <p class="text-dawn pt-1 text-sm font-medium leading-relaxed">
        {{ project.description }}
      </p>
    </div>

    <footer class="flex items-center justify-between">
      <span class="text-dawn flex items-center gap-2 text-sm font-semibold">
        <div
          class="h-3 w-3 rounded-full border"
          :class="[tech.background, tech.border]"
        />

        {{ tech.name }}
      </span>

      <a
        class="group flex cursor-pointer items-center gap-2 p-2 font-semibold"
        :href="project.repository_link"
        target="_blank"
      >
        Ver mais
        <ArrowRight class="w-4 transition-all group-hover:translate-x-1" />
      </a>
    </footer>
  </article>
</template>
