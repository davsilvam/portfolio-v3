<script lang="ts" setup>
import { ArrowUpRight } from 'lucide-vue-next'

interface NavigationLinkProps {
  path: string
}

defineProps<NavigationLinkProps>()
</script>

<template>
  <NuxtLink
    :to="path"
    class="flex items-center gap-2 font-semibold transition-all"
  >
    <slot />
    <ArrowUpRight class="w-4" />
  </NuxtLink>
</template>
