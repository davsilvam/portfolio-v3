<script lang="ts" setup>
  defineProps<{
    path: string
  }>()
</script>

<template>
  <a
    class="card hover:bg-secondary-800 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-md font-semibold"
    :href="path"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>
