<script lang="ts" setup>
  interface NavigationLinkProps {
    name: string
    path: string
  }

  defineProps<NavigationLinkProps>()

  const { t } = useLang()
  const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    active-class="active-class"
    :to="localePath(path)"
    class="text-secondary-400 hover:text-secondary-200 font-semibold transition-colors"
  >
    {{ t(name) }}
  </NuxtLink>
</template>

<style scoped>
  .active-class {
    color: rgb(227 227 227) !important;
  }
</style>
