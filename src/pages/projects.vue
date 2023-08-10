<script lang="ts" setup>
import { ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <div
    class="relative flex h-full w-full items-center justify-center pb-20 text-zenith md:mt-52"
  >
    <main
      class="relative flex h-full w-full items-start justify-end px-8 max-lg:flex-col max-lg:gap-6 max-md:pb-28 max-md:pt-36 md:px-20"
    >
      <div
        class="left-20 top-52 flex flex-col items-start pb-10 lg:fixed lg:z-10"
      >
        <h1>
          <div class="flex items-center gap-3">
            <span class="text-lg font-semibold text-zenith">
              Um pouco sobre meus
            </span>

            <hr class="w-28 flex-1 border-zenith md:w-36">
          </div>

          <strong class="text-7xl font-bold md:text-8xl">
            Projetos
          </strong>
        </h1>

        <p
          class="mt-6 text-sm font-semibold leading-loose text-dawn lg:max-w-xl"
        >
          Como Desenvolvedor Front-end, costumo construir
          <span class="text-zenith">
            soluções para problemas do mundo real </span>. Estou habituado a criar
          <span class="text-zenith">sistemas com CRUD</span>,
          <span class="text-zenith">Landing Pages</span> e
          <span class="text-zenith">consumir API's externas</span>. Gosto de
          construir
          <span class="text-zenith">projetos que dão liberdade ao usuário</span>, com <span class="text-zenith">múltiplos recursos</span>,
          <span class="text-zenith">interfaces modernas</span> e
          <span class="text-zenith">elegantes</span>.
        </p>

        <p class="mb-3 mt-8 text-sm font-semibold text-dawn">
          Você também pode visitar meu
          <span class="text-zenith">GitHub</span> para ver mais dos meus
          projetos:
        </p>

        <a
          href="https://github.com/davsilvam?tab=repositories"
          target="_blank"
          class="flex items-center gap-3 font-semibold"
        >
          <IconGitHub class="w-4 fill-zenith" />
          Github
          <ExternalLink class="w-[14px]" />
        </a>
      </div>

      <ProjectCardContainer />
    </main>
  </div>
</template>
