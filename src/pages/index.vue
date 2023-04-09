<script lang="ts" setup>
  import { ChevronRightIcon } from '@heroicons/vue/24/outline'

  const { t } = useLang()
  const localePath = useLocalePath()
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-screen w-full items-center justify-center"
  >
    <main
      class="flex h-full w-full items-center justify-start px-8 md:px-16 lg:px-32 xl:px-52"
    >
      <div class="flex flex-col items-start">
        <div class="flex items-center gap-3">
          <h3 class="pl-0.5 text-lg font-semibold md:pl-1.5">Oi, eu sou o</h3>
          <hr class="border-secondary-50 w-56" />
        </div>
        <h1 class="font-italiana text-5xl font-bold md:text-8xl">
          David Silva
        </h1>
        <BaseOutlineTitle
          class="pl-0.5 pt-2 text-4xl max-sm:w-[80%] md:pl-1.5 md:text-5xl"
        >
          {{ t('job') }}
        </BaseOutlineTitle>

        <NuxtLink
          :to="localePath('/projects')"
          class="bg-secondary-50 hover:shadow-secondary-50/20 text-secondary-900 mt-10 flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-shadow hover:shadow-lg"
        >
          Conheça meu trabalho
          <ChevronRightIcon class="w-4" />
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
