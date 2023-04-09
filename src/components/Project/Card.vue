<script lang="ts" setup>
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
  import { Project } from '../../composables/useProjects'

  defineProps<{
    project: Project
  }>()
</script>

<template>
  <article
    class="bg-secondary-800 flex h-40 w-full flex-col justify-between p-5"
  >
    <div class="flex flex-col">
      <h2 class="text-secondary-100 text-sm">
        {{ project.category }}
      </h2>
      <h1 class="text-secondary-50 text-lg font-semibold">
        {{ project.name }}
      </h1>
      <p class="text-secondary-300 pt-1 text-xs">
        {{ project.description }}
      </p>
    </div>

    <footer class="flex items-center justify-between">
      <p class="text-secondary-100 text-sm">
        Feito com
        <em class="text-secondary-50 font-semibold">{{ project.language }}</em>
      </p>
      <div class="flex items-center gap-3">
        <a class="group" :href="project.repository_link" target="_blank">
          <IconGitHub class="w-5" />
        </a>
        <a
          class="hover:text-secondary-300 grid place-items-center"
          :href="project.deploy_link"
          target="_blank"
        >
          <ArrowTopRightOnSquareIcon class="w-5" />
        </a>
      </div>
    </footer>
  </article>
</template>
