<script lang="ts" setup>
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
  import { Project } from '../../composables/useProjects'

  defineProps<{
    project: Project
  }>()
</script>

<template>
  <article
    class="bg-secondary-800 flex w-full flex-col justify-between gap-10 p-8"
  >
    <div class="flex flex-col">
      <img
        class="mb-5 h-10 w-fit"
        :src="project.image_url"
        :alt="`${project.name} logo.`"
      />
      <h1 class="text-secondary-50 font-italiana text-xl font-bold">
        {{ project.name }}
      </h1>
      <p class="text-secondary-200 pt-1 text-sm">
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
          class="hover:text-secondary-300 text-secondary-50 grid place-items-center"
          :href="project.deploy_link"
          target="_blank"
        >
          <ArrowTopRightOnSquareIcon class="w-5" />
        </a>
      </div>
    </footer>
  </article>
</template>
