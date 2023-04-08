<script lang="ts" setup>
  import {
    FaceSmileIcon,
    FolderOpenIcon,
    PaintBrushIcon,
    RocketLaunchIcon
  } from '@heroicons/vue/24/outline'

  const { t } = useLang()
</script>

<template>
  <div
    class="text-secondary-50 relative flex min-h-full w-full flex-col items-center justify-center"
  >
    <section class="flex flex-col items-center max-md:mt-28">
      <BaseOutlineTitle class="text-6xl">Hard Skills</BaseOutlineTitle>
      <ul class="grid grid-cols-2 gap-8 pt-8 md:grid-cols-4">
        <li>
          <CardHardSkill path="https://nuxt.com">
            <IconNuxt class="fill-secondary-50 w-12" />
            Nuxt 3
          </CardHardSkill>
        </li>
        <li>
          <CardHardSkill path="https://vuejs.org">
            <IconVue class="w-12" />
            Vue.js
          </CardHardSkill>
        </li>
        <li>
          <CardHardSkill path="https://www.typescriptlang.org">
            <IconTypeScript class="w-11" />
            TypeScript
          </CardHardSkill>
        </li>
        <li>
          <CardHardSkill path="https://tailwindcss.com">
            <IconTailwindCSS class="w-12" />
            TailwindCSS
          </CardHardSkill>
        </li>
      </ul>
      <p class="text-secondary-200 max-w-[600px] px-8 pt-4 text-sm">
        {{ t('extra_hard_skills') }}
      </p>
    </section>

    <section class="flex flex-col items-center pt-5">
      <BaseOutlineTitle class="text-6xl">Soft Skills</BaseOutlineTitle>
      <ul class="grid grid-cols-2 gap-8 pt-8 max-md:pb-28 md:grid-cols-4">
        <li>
          <CardSoftSkill>
            <FolderOpenIcon class="w-12" />{{ t('organized') }}
          </CardSoftSkill>
        </li>
        <li>
          <CardSoftSkill>
            <FaceSmileIcon class="w-12" />{{ t('positive') }}
          </CardSoftSkill>
        </li>
        <li>
          <CardSoftSkill>
            <PaintBrushIcon class="w-12" />{{ t('creative') }}
          </CardSoftSkill>
        </li>
        <li>
          <CardSoftSkill>
            <RocketLaunchIcon class="w-12" />{{ t('flexible') }}
          </CardSoftSkill>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
  section:has(.card:hover) .card:not(:hover) {
    opacity: 0.6;
    transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  }
</style>
