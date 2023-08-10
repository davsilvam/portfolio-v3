<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'
import { type Project } from '~/types/github'

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
    border: 'border-green-300',
  },
  JavaScript: {
    name: 'JavaScript',
    background: 'bg-amber-400',
    border: 'border-amber-300',
  },
  TypeScript: {
    name: 'TypeScript',
    background: 'bg-blue-400',
    border: 'border-blue-300',
  },
}

const tech = props.project.language && technologies[props.project.language]
</script>

<template>
  <article
    class="flex w-full flex-col justify-between gap-3 bg-dusk p-8 text-zenith transition-all ease-in hover:scale-105"
  >
    <div class="flex flex-col gap-1">
      <strong class="text-lg font-bold">
        {{ project.name }}
      </strong>

      <p class="pt-1 text-sm font-medium leading-relaxed text-dawn">
        {{ project.description }}
      </p>
    </div>

    <footer class="flex items-center justify-between">
      <span
        v-if="tech"
        class="flex items-center gap-2 text-sm font-semibold text-dawn"
      >
        <div
          class="h-3 w-3 rounded-full border"
          :class="[tech.background, tech.border]"
        />

        {{ tech.name }}
      </span>

      <a
        class="group flex cursor-pointer items-center gap-2 p-2 font-semibold"
        :href="project.html_url"
        target="_blank"
      >
        Ver mais
        <ArrowRight class="w-4 transition-all group-hover:translate-x-1" />
      </a>
    </footer>
  </article>
</template>
