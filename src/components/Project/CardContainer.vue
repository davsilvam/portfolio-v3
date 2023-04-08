<script lang="ts" setup>
  import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

  const { currentPage, goToNextPage, goToPreviousPage, projects } =
    useProjects()
</script>

<template>
  <section class="flex w-full items-center justify-center">
    <div
      class="relative grid w-fit grid-cols-2 grid-rows-3 flex-col place-items-center gap-x-4 max-md:flex max-md:gap-y-4 md:h-[546px] md:grid-rows-2"
    >
      <ProjectCard
        class="col-span-1 col-start-1 row-span-1"
        :project="projects[currentPage][0]"
      />
      <ProjectCard
        class="col-span-1 col-start-2 max-md:row-start-2 md:row-span-2"
        :project="projects[currentPage][1]"
      />
      <ProjectCard
        v-if="currentPage === 0"
        class="col-span-1 col-start-1 row-span-1 row-start-2 max-md:row-start-3"
        :project="projects[currentPage][2]"
      />

      <a
        v-else
        class="border-secondary-800 hover:border-secondary-50 flex h-64 w-64 items-center justify-center gap-2 rounded-md border-2 p-4 hover:translate-y-1"
        href="https://github.com/davsilvam/repos"
        target="_blank"
      >
        <span class="font-semibold">Visitar GitHub</span>
        <IconGitHub class="w-4" />
      </a>

      <nav
        class="absolute bottom-5 flex items-center gap-2 text-lg font-medium max-md:hidden md:right-5"
      >
        <button
          v-if="currentPage !== 0"
          @click="goToPreviousPage"
          class="hover:bg-secondary-800 rounded-full p-2"
        >
          <ChevronLeftIcon class="w-5" />
        </button>
        <p>{{ currentPage + 1 }}</p>
        <button
          v-if="currentPage === 0"
          @click="goToNextPage"
          class="hover:bg-secondary-800 rounded-full p-2"
        >
          <ChevronRightIcon class="w-5" />
        </button>
      </nav>

      <button
        v-if="currentPage === 0"
        @click="goToNextPage"
        class="text-secondary-50 border-secondary-50 flex w-full items-center justify-center gap-1 rounded-md border-2 py-3 font-semibold md:hidden"
      >
        Próxima Página
        <ChevronRightIcon class="w-4" />
      </button>

      <button
        v-else
        @click="goToPreviousPage"
        class="text-secondary-50 border-secondary-50 flex w-full items-center justify-center gap-1 rounded-md border-2 py-3 font-semibold md:hidden"
      >
        <ChevronLeftIcon class="w-4" />
        Página Anterior
      </button>
    </div>
  </section>
</template>
