<script lang="ts" setup>
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <div
    class="relative flex h-screen w-full items-center justify-center text-zenith"
  >
    <main
      class="flex h-full w-full items-center justify-start px-8 md:px-16 lg:px-32 xl:px-52"
    >
      <div class="flex flex-col items-start gap-4">
        <h1>
          <div class="flex items-center gap-3">
            <span class="text-lg font-semibold">Opa, eu sou o</span>

            <hr class="w-56 flex-1 bg-zenith max-md:w-48">
          </div>

          <strong class="text-6xl font-bold md:text-8xl"> David Silva </strong>
        </h1>

        <p class="mb-5 max-w-3xl text-sm font-medium leading-loose text-dawn">
          Sou
          <span class="text-zenith">Desenvolvedor Web Front-end</span>
          e atualmente curso
          <a
            href="https://smd.ufc.br/pt/"
            target="_blank"
            class="border-b border-dawn pb-0.5 text-zenith transition-colors hover:border-zenith"
          >
            Sistemas e Mídias Digitais na Universidade Federal do Ceará (UFC) </a>. Eu sou autodidata, me empenho em construir projetos próprios e
          explorar ferramentas atuais. Também gosto de aprender com pessoas que
          me repassem um
          <span class="text-zenith">conhecimento sólido e valioso</span>.
        </p>

        <nav class="flex items-center gap-10">
          <NuxtLink
            to="/projects"
            class="flex items-center gap-2 font-semibold transition-all"
          >
            Projetos
            <ArrowUpRight class="w-4" />
          </NuxtLink>

          <NuxtLink
            to="/mission"
            class="flex items-center gap-2 font-semibold transition-all"
          >
            Missão
            <ArrowUpRight class="w-4" />
          </NuxtLink>
        </nav>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
