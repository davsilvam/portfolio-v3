<script lang="ts" setup>
  import {
    Bars3Icon,
    HomeIcon,
    RocketLaunchIcon,
    SparklesIcon
  } from '@heroicons/vue/24/outline'

  const isNavbarOpen = ref<boolean>(false)

  function toogleNavbar() {
    isNavbarOpen.value = !isNavbarOpen.value
  }

  const { t } = useLang()
  const localePath = useLocalePath()
  const route = useRoute()

  watch(route, () => {
    toogleNavbar()
  })
</script>

<template>
  <div
    class="bg-secondary-900 border-secondary-800 fixed bottom-0 flex w-full flex-col border-t transition-transform duration-300 ease-in-out md:hidden"
    :class="[isNavbarOpen ? 'translate-y-0' : 'translate-y-72']"
  >
    <button
      @click="toogleNavbar"
      class="text-secondary-50 border-secondary-800 flex h-20 w-full items-center justify-center gap-2 border-b font-semibold"
    >
      <Bars3Icon class="w-6" /> <span>Menu</span>
    </button>

    <nav class="text-secondary-50 flex flex-col gap-2 px-3 py-5">
      <NuxtLink
        :to="localePath('/')"
        class="hover:bg-secondary-800 flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors"
      >
        <HomeIcon class="w-5" />
        <span>{{ t('home_page') }}</span>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/projects')"
        class="hover:bg-secondary-800 flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors"
      >
        <RocketLaunchIcon class="w-5" />
        <span>{{ t('projects') }}</span>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/skills')"
        class="hover:bg-secondary-800 flex w-full items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold transition-colors"
      >
        <SparklesIcon class="w-5" />
        <span>{{ t('skills') }}</span>
      </NuxtLink>

      <hr class="border-secondary-800 my-2 border-[0.5px]" />

      <div class="flex w-full items-center gap-2">
        <SocialLink
          class="h-10 w-full"
          href="https://github.com/davsilvam?tab=repositories"
          target="_blank"
        >
          <IconGitHub class="w-4" /> <span>GitHub</span>
        </SocialLink>

        <SocialLink
          class="h-10 w-full"
          href="https://www.linkedin.com/in/davsilvam/"
          target="_blank"
        >
          <IconLinkedin class="w-4" /> <span>Linkedin</span>
        </SocialLink>
      </div>
    </nav>
  </div>
</template>
