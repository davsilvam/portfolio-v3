<script lang="ts" setup>
import { ArrowUpRight, ExternalLink, Menu } from 'lucide-vue-next'

const isNavbarOpen = ref<boolean>(false)

function toogleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value
}

const route = useRoute()

watch(route, () => {
  toogleNavbar()
})
</script>

<template>
  <div
    class="fixed bottom-0 flex w-full flex-col border-t border-dawn/10 bg-night transition-transform duration-300 ease-in-out md:hidden"
    :class="[isNavbarOpen ? 'translate-y-0' : 'translate-y-[294px]']"
  >
    <button
      class="flex h-20 w-full items-center justify-center gap-2 border-b border-dawn/10 font-semibold text-zenith"
      @click="toogleNavbar"
    >
      <Menu class="w-6" />
      Menu
    </button>

    <nav class="flex flex-col gap-2 px-3 py-5 text-zenith">
      <NuxtLink
        to="/"
        class="flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors hover:bg-dawn/10"
      >
        Página Inicial
        <ArrowUpRight class="w-4" />
      </NuxtLink>

      <NuxtLink
        to="/projects"
        class="flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors hover:bg-dawn/10"
      >
        Projetos
        <ArrowUpRight class="w-4" />
      </NuxtLink>

      <NuxtLink
        to="/mission"
        class="flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors hover:bg-dawn/10"
      >
        Missão
        <ArrowUpRight class="w-4" />
      </NuxtLink>

      <hr class="my-2 border-[0.5px] border-dawn/10">

      <div class="flex w-full items-center gap-2">
        <a
          class="flex w-full items-center justify-center gap-3 fill-zenith py-2 font-semibold hover:bg-dawn/10"
          href="https://github.com/davsilvam"
          target="_blank"
        >
          <IconGitHub class="w-4 fill-zenith" />
          Github
          <ExternalLink class="w-[14px]" />
        </a>

        <a
          class="flex w-full items-center justify-center gap-3 py-2 font-semibold hover:bg-dawn/10"
          href="https://www.linkedin.com/in/davsilvam/"
          target="_blank"
        >
          <IconLinkedin class="w-4 fill-zenith" />
          Linkedin
          <ExternalLink class="w-[14px]" />
        </a>
      </div>
    </nav>
  </div>
</template>
