<script lang="ts" setup>
  const router = useRoute()
</script>

<template>
  <div class="flex min-h-screen flex-col items-start">
    <AppHeader v-if="router.path !== '/'" />
    <slot></slot>
    <AppMobileNavbar />
  </div>
</template>
