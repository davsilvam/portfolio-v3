<script lang="ts" setup>
  import { ChevronDownIcon } from '@heroicons/vue/24/outline'

  const { t } = useLang()
  const localePath = useLocalePath()
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-full w-full items-center justify-center"
  >
    <main
      class="text-secondary-50 relative grid w-full grid-cols-12 items-center justify-center max-lg:gap-6 max-md:pt-36 max-md:pb-28"
    >
      <section
        class="col-span-5 col-start-2 lg:col-span-4 lg:col-start-2 xl:col-start-3"
      >
        <div
          class="bg-secondary-100 h-32 w-32 rounded-full lg:h-40 lg:w-40"
        ></div>
        <BaseOutlineTitle class="pt-8 text-4xl uppercase lg:text-6xl">
          {{ t('who_is') }}
        </BaseOutlineTitle>
        <h2 class="text-6xl font-bold uppercase lg:text-8xl">David?</h2>
        <h3 class="text-secondary-100 pt-3 pl-1 font-[Poppins] max-lg:hidden">
          {{ t('presentation_subtitle') }}
        </h3>
      </section>
      <section
        class="col-span-10 col-start-2 flex w-full flex-col gap-3 font-[Poppins] md:col-span-8 md:col-start-2 lg:col-span-4 lg:col-start-7"
      >
        <p>{{ t('presentation_1') }}</p>
        <p>{{ t('presentation_2') }}</p>
        <p>{{ t('presentation_3') }}</p>
      </section>
    </main>
    <NuxtLink
      :to="localePath('/')"
      class="absolute hidden w-36 translate-x-12 -rotate-90 flex-col items-center text-lg font-semibold uppercase md:right-10 md:flex"
    >
      {{ t('home_page') }}
      <ChevronDownIcon class="w-6" />
    </NuxtLink>
  </div>
</template>
