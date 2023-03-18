<script lang="ts" setup>
  import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-screen w-full items-center justify-center"
  >
    <main class="flex h-full items-center justify-center">
      <div class="flex flex-col items-center">
        <h1 class="text-5xl font-bold">David Silva</h1>
        <BaseOutlineTitle
          class="pt-1 text-center text-3xl max-sm:w-[80%] md:text-4xl"
        >
          Desenvolvedor Front-end
        </BaseOutlineTitle>
        <ul
          class="flex items-center justify-center gap-6 pt-4 font-[Poppins] text-lg md:gap-12 md:pt-6"
        >
          <li>
            <h3>Atualizado</h3>
          </li>
          <li>
            <h3>Simples</h3>
          </li>
          <li>
            <h3>Organizado</h3>
          </li>
        </ul>
      </div>
    </main>
    <NuxtLink
      to="/skills"
      class="absolute bottom-5 hidden flex-col items-center text-lg font-semibold uppercase md:flex lg:bottom-10"
    >
      Habilidades
      <ChevronDownIcon class="w-6" />
    </NuxtLink>
    <NuxtLink
      to="/about-me"
      class="absolute left-5 hidden w-36 -translate-x-12 rotate-90 flex-col items-center text-lg font-semibold uppercase md:flex lg:left-10"
    >
      Sobre mim
      <ChevronDownIcon class="w-6" />
    </NuxtLink>
    <NuxtLink
      to="/projects"
      class="absolute right-5 hidden w-36 translate-x-12 -rotate-90 flex-col items-center text-lg font-semibold uppercase md:flex lg:right-10"
    >
      Projetos
      <ChevronDownIcon class="w-6" />
    </NuxtLink>
  </div>
</template>
