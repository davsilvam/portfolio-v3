<script lang="ts" setup>
  import { LinkIcon } from '@heroicons/vue/20/solid'

  interface Project {
    name: string
    category: string
    description: string
    image_url: string
    language: string
    deploy_link: string
    repository_link: string
  }

  defineProps<{
    project: Project
  }>()
</script>

<template>
  <article
    class="border-secondary-800 flex h-64 w-64 flex-col justify-between rounded-md border-2 p-4"
  >
    <div class="flex flex-col">
      <nuxt-img :src="project.image_url" class="w-10 rounded" />
      <h2 class="text-secondary-100 pt-5 text-xs font-medium">
        {{ project.category }}
      </h2>
      <h1 class="text-secondary-50 text-xl font-bold">
        {{ project.name }}
      </h1>
      <p class="text-secondary-100 pt-1 text-xs">
        {{ project.description }}
      </p>
    </div>

    <footer class="flex items-center justify-between">
      <p class="text-sm">
        Feito com <em class="font-semibold">{{ project.language }}</em>
      </p>
      <div class="flex gap-3">
        <a
          class="grid place-items-center"
          :href="project.deploy_link"
          target="_blank"
        >
          <LinkIcon class="w-6" />
        </a>
        <a :href="project.repository_link" target="_blank"
          ><IconGitHub class="w-6"
        /></a>
      </div>
    </footer>
  </article>
</template>
