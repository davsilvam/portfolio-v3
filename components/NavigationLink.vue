<script lang="ts" setup>
  import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'

  interface NavigationLinkProps {
    direction: string
    name: string
    path: string
  }

  defineProps<NavigationLinkProps>()

  const { t } = useLang()
  const localePath = useLocalePath()

  interface DirectionClass {
    [direction: string]: string
  }

  const directionClass: DirectionClass = {
    top: 'top-5 lg:top-10 z-20',
    left: 'left-5 lg:left-10 -translate-x-8 rotate-90',
    right: 'right-5 lg:right-10 translate-x-8 -rotate-90',
    bottom: 'bottom-5 lg:bottom-10'
  }
</script>

<template>
  <NuxtLink
    :to="localePath(path)"
    class="absolute hidden flex-col items-center text-lg font-semibold uppercase md:flex"
    :class="directionClass[direction]"
  >
    <ChevronUpIcon v-if="direction === 'top'" class="w-6" />
    {{ t(name) }}
    <ChevronDownIcon v-if="direction !== 'top'" class="w-6" />
  </NuxtLink>
</template>
