<script lang="ts" setup>
  import { ChevronRightIcon } from '@heroicons/vue/20/solid'

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
        <h1>
          <div class="flex items-center gap-3">
            <span class="text-lg font-semibold">{{ t('hi') }}</span>
            <hr class="border-secondary-50 w-56 flex-1 max-md:w-48" />
          </div>

          <strong class="font-italiana text-6xl font-bold md:text-8xl">
            David Silva
          </strong>
        </h1>

        <p class="mt-3 max-w-3xl text-sm">
          {{ t('presentation') }}
        </p>

        <NuxtLink
          :to="localePath('/projects')"
          class="bg-secondary-50 hover:shadow-secondary-50/20 text-secondary-900 mt-6 flex items-center gap-1 rounded px-5 py-3 text-sm font-semibold transition-shadow hover:shadow-lg"
        >
          <span>{{ t('know_my_work') }}</span>
          <ChevronRightIcon class="w-5" />
        </NuxtLink>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
