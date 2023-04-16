<script lang="ts" setup>
  import { GlobeAmericasIcon } from '@heroicons/vue/24/outline'
  import { locales } from '../../../locales'

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
  <div class="relative">
    <button
      @click="toogleTranslateMenu"
      class="hover:bg-secondary-800 text-secondary-50 flex items-center justify-center rounded-full p-3"
    >
      <GlobeAmericasIcon class="w-6" />
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
</template>
