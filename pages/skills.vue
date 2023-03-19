<script lang="ts" setup>
  import {
    ChevronUpIcon,
    FaceSmileIcon,
    FolderOpenIcon,
    PaintBrushIcon,
    RocketLaunchIcon
  } from '@heroicons/vue/24/outline'

  const { t } = useLang()
  const localePath = useLocalePath()
</script>

<template>
  <div
    class="text-secondary-50 relative flex min-h-full w-full flex-col items-center justify-center"
  >
    <section class="flex flex-col items-center max-md:mt-28">
      <BaseOutlineTitle class="text-6xl">Hard Skills</BaseOutlineTitle>
      <ul class="grid grid-cols-2 gap-8 pt-8 md:grid-cols-4">
        <li>
          <a
            class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
            href="https://nuxt.com"
            target="_blank"
          >
            <IconNuxt class="fill-secondary-50 w-12" />
            Nuxt 3
          </a>
        </li>
        <li>
          <a
            class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
            href="https://vuejs.org"
            target="_blank"
          >
            <IconVue class="w-12" />
            Vue.js
          </a>
        </li>
        <li>
          <a
            class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
            href="https://www.typescriptlang.org"
            target="_blank"
          >
            <IconTypeScript class="w-11" />
            TypeScript
          </a>
        </li>
        <li>
          <a
            class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
            href="https://tailwindcss.com"
            target="_blank"
          >
            <IconTailwindCSS class="w-12" />
            TailwindCSS
          </a>
        </li>
      </ul>
      <p class="text-secondary-200 max-w-[600px] px-8 pt-4 text-sm">
        {{ t('extra_hard_skills') }}
      </p>
    </section>
    <section class="flex flex-col items-center pt-5">
      <BaseOutlineTitle class="text-6xl">Soft Skills</BaseOutlineTitle>
      <ul class="grid grid-cols-2 gap-8 pt-8 max-md:pb-28 md:grid-cols-4">
        <li
          class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
        >
          <FolderOpenIcon class="w-12" />{{ t('organized') }}
        </li>
        <li
          class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
        >
          <FaceSmileIcon class="w-12" />{{ t('positive') }}
        </li>
        <li
          class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
        >
          <PaintBrushIcon class="w-12" />{{ t('creative') }}
        </li>
        <li
          class="hover:bg-secondary-800/20 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
        >
          <RocketLaunchIcon class="w-12" />{{ t('flexible') }}
        </li>
      </ul>
    </section>
    <NuxtLink
      :to="localePath('/')"
      class="text-secondary-50 absolute top-10 z-20 hidden flex-col items-center align-middle text-lg font-semibold uppercase md:flex"
    >
      <ChevronUpIcon class="w-6" />
      {{ t('home_page') }}
    </NuxtLink>
  </div>
</template>
