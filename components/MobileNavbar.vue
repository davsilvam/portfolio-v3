<script lang="ts" setup>
  import {
    Bars3Icon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon
  } from '@heroicons/vue/20/solid'

  const isNavbarOpen = ref(false)

  function toogleNavbar() {
    isNavbarOpen.value = !isNavbarOpen.value
  }

  const { t } = useLang()
  const localePath = useLocalePath()
  const route = useRoute()
  const currentPath = ref(localePath(route.path))

  watchEffect(() => {
    if (route.path) currentPath.value = localePath(route.path)
  })

  watch(route, () => {
    toogleNavbar()
  })
</script>

<template>
  <nav
    v-if="currentPath"
    class="bg-secondary-900 border-secondary-800 fixed bottom-0 flex w-full flex-col border-t transition-transform duration-300 ease-in-out md:hidden"
    :class="[
      isNavbarOpen
        ? 'translate-y-0'
        : currentPath === localePath('/')
        ? 'translate-y-[310px]'
        : 'translate-y-[130px]'
    ]"
  >
    <button
      @click="toogleNavbar"
      class="text-secondary-50 border-secondary-800 flex h-20 w-full items-center justify-center gap-2 border-b font-semibold"
    >
      <Bars3Icon class="w-6" /> Menu
    </button>
    <ul
      class="text-secondary-50 grid grid-cols-4 place-items-center gap-5 p-6"
      v-if="currentPath === localePath('/')"
    >
      <li class="col-span-2 w-full">
        <NuxtLink
          :to="localePath('/about-me')"
          class="bg-secondary-800 hover:bg-secondary-800/30 flex h-40 w-full items-center justify-center gap-1 rounded-md text-lg font-semibold"
        >
          <ChevronLeftIcon class="w-6" /> {{ t('about_me') }}
        </NuxtLink>
      </li>
      <li class="col-span-2 w-full">
        <NuxtLink
          :to="localePath('/projects')"
          class="bg-secondary-800 hover:bg-secondary-800/30 flex h-40 w-full items-center justify-center gap-1 rounded-md text-lg font-semibold"
        >
          {{ t('projects') }} <ChevronRightIcon class="w-6" />
        </NuxtLink>
      </li>
      <li class="col-span-4 w-full">
        <NuxtLink
          :to="localePath('/skills')"
          class="bg-secondary-800 hover:bg-secondary-800/30 flex h-20 w-full flex-col items-center justify-center gap-1 rounded-md text-lg font-semibold"
        >
          {{ t('skills') }} <ChevronDownIcon class="w-6" />
        </NuxtLink>
      </li>
    </ul>
    <div
      class="text-secondary-50 grid grid-cols-4 place-items-center gap-5 p-6"
      v-else
    >
      <NuxtLink
        :to="localePath('/')"
        class="bg-secondary-800 hover:bg-secondary-800/30 col-span-4 flex h-20 w-full items-center justify-center gap-1 rounded-md text-lg font-semibold"
      >
        {{ t('home_page') }}
        <ChevronRightIcon
          v-if="currentPath === localePath('/about-me')"
          class="w-6"
        />
        <ChevronLeftIcon
          v-else-if="currentPath === localePath('/projects')"
          class="w-6"
        />
        <ChevronUpIcon
          v-else-if="currentPath === localePath('/skills')"
          class="w-6"
        />
      </NuxtLink>
    </div>
  </nav>
</template>
