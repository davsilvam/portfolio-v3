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
    class="bg-night border-dawn/10 fixed bottom-0 flex w-full flex-col border-t transition-transform duration-300 ease-in-out md:hidden"
    :class="[isNavbarOpen ? 'translate-y-0' : 'translate-y-[294px]']"
  >
    <button
      @click="toogleNavbar"
      class="text-zenith border-dawn/10 flex h-20 w-full items-center justify-center gap-2 border-b font-semibold"
    >
      <Menu class="w-6" />
      Menu
    </button>

    <nav class="text-zenith flex flex-col gap-2 px-3 py-5">
      <NuxtLink
        to="/"
        class="hover:bg-dawn/10 flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors"
      >
        Página Inicial
        <ArrowUpRight class="w-4" />
      </NuxtLink>

      <NuxtLink
        to="/projects"
        class="hover:bg-dawn/10 flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors"
      >
        Projetos
        <ArrowUpRight class="w-4" />
      </NuxtLink>

      <NuxtLink
        to="/skills"
        class="hover:bg-dawn/10 flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors"
      >
        Habilidades
        <ArrowUpRight class="w-4" />
      </NuxtLink>

      <hr class="border-dawn/10 my-2 border-[0.5px]" />

      <div class="flex w-full items-center gap-2">
        <a
          class="hover:bg-dawn/10 flex w-full items-center justify-center gap-3 py-2 font-semibold"
          href="https://github.com/davsilvam"
          target="_blank"
        >
          <IconGitHub class="w-4" />
          Github
          <ExternalLink class="w-[14px]" />
        </a>

        <a
          class="hover:bg-dawn/10 flex w-full items-center justify-center gap-3 py-2 font-semibold"
          href="https://www.linkedin.com/in/davsilvam/"
          target="_blank"
        >
          <IconLinkedin class="w-4" />
          Linkedin
          <ExternalLink class="w-[14px]" />
        </a>
      </div>
    </nav>
  </div>
</template>
