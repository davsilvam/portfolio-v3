<script lang="ts" setup>
  import { locales } from '../locales'

  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const isTranslateMenuOpen = ref<boolean>(false)

  function toogleTranslateMenu() {
    isTranslateMenuOpen.value = !isTranslateMenuOpen.value
  }

  const local = computed(() => {
    return locale.value
  })

  watch(local, () => {
    toogleTranslateMenu()
  })
</script>

<template>
  <header class="fixed top-0 z-10 flex w-full items-center justify-between p-8">
    <nuxt-img class="h-6" src="/logo.png" alt="David's Logo" />

    <div class="relative">
      <button
        @click="toogleTranslateMenu"
        class="hover:bg-secondary-800 ring-secondary-50 flex h-12 w-12 items-center justify-center rounded-full hover:ring-2"
      >
        <IconLanguage class="w-5" />
      </button>
      <nav
        v-if="isTranslateMenuOpen"
        class="text-secondary-50 bg-secondary-800 absolute right-2 mt-3 flex w-40 flex-col rounded-md py-3 text-right"
      >
        <NuxtLink
          class="ring-secondary-50 text-secondary-200 hover:text-secondary-50 w-full cursor-pointer py-2 px-4 text-sm font-medium"
          v-for="{ name, code } in locales"
          :key="code"
          :to="switchLocalePath(code)"
        >
          {{ name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
