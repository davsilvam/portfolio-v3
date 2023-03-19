<script lang="ts" setup>
  import { ChevronDownIcon, MapPinIcon } from '@heroicons/vue/24/outline'

  const { t } = useLang()
  const localePath = useLocalePath()

  interface Project {
    name: string
    category: string
    description: string
    image_url: string
    language: string
    deploy_link: string
    repository_link: string
  }

  const topProjects: Project[] = [
    {
      image_url: '/parsi_badge.png',
      name: 'Parsi',
      category: 'Gerenciador de Finanças',
      description:
        'A Parsi é uma aplicação web que ajuda a registrar suas transações e auxilia no melhor gerenciamento dos gastos.',
      language: 'Vue.js',
      deploy_link: 'https://parsi-app.vercel.app',
      repository_link: 'https://github.com/davsilvam/parsi-app'
    },
    {
      image_url: '/movieshelf_badge.png',
      name: 'Movieshelf',
      category: 'Estante de Filmes',
      description:
        'A Movieshelf é uma estante virtual, na qual você pode adicionar filmes à sua estante, favoritar ou salvar filmes para sua próxima sessão.',
      language: 'React.js',
      deploy_link: 'https://movieshelf-two.vercel.app',
      repository_link: 'https://github.com/davsilvam/movieshelf'
    },
    {
      image_url: '/towo_badge.png',
      name: 'ToWo',
      category: 'Registro de Treinos',
      description:
        'ToWo é uma aplicação voltado para o registro de suas atividades físicas, especificamente, atividades que envolvam séries de exercícios.',
      language: 'Vue.js',
      deploy_link: 'https://towo-list.vercel.app',
      repository_link: 'https://github.com/davsilvam/towo-list'
    }
  ]
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-full w-full items-center justify-center"
  >
    <main
      class="text-secondary-50 relative flex w-full items-center justify-center px-20 max-lg:gap-6 max-md:pt-36 max-md:pb-28"
    >
      <section class="flex w-full flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/101468533?v=4"
          class="h-32 w-32 rounded-full lg:h-40 lg:w-40"
        />
        <h1 class="pt-10 text-3xl font-bold">David Silva</h1>
        <h2 class="text-secondary-100 font-[Poppins] text-xl font-medium">
          {{ t('job') }}
        </h2>
        <p
          class="text-secondary-50 flex items-center gap-2 pt-3 font-[Poppins] font-medium"
        >
          <MapPinIcon class="w-5" /> {{ t('location') }}
        </p>
        <button
          class="ring-secondary-50 hover:shadow-secondary-50/20 mt-6 h-10 w-52 rounded-md ring-1 transition-all hover:shadow-lg"
        >
          <a
            class="flex h-full w-full items-center justify-center gap-2 text-sm font-semibold"
            href="https://github.com/davsilvam"
            target="_blank"
          >
            <IconGitHub class="w-4" />
            Ir ao GitHub
          </a>
        </button>
      </section>
      <section class="flex w-full items-center justify-center">
        <div
          class="grid h-[556px] w-fit grid-cols-2 grid-rows-2 place-items-center gap-x-4"
        >
          <ProjectCard
            class="col-span-1 col-start-1 row-span-1"
            :project="topProjects[0]"
          />
          <ProjectCard
            class="col-span-1 col-start-2 row-span-2"
            :project="topProjects[1]"
          />
          <ProjectCard
            class="col-span-1 col-start-1 row-span-1 row-start-2"
            :project="topProjects[2]"
          />
        </div>
      </section>
    </main>
    <NuxtLink
      :to="localePath('/')"
      class="absolute hidden w-36 -translate-x-12 rotate-90 flex-col items-center text-lg font-semibold uppercase md:left-10 md:flex"
    >
      {{ t('home_page') }}
      <ChevronDownIcon class="w-6" />
    </NuxtLink>
  </div>
</template>
