<script lang="ts" setup>
  import { AnchorHTMLAttributes } from 'vue'
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

  interface SocialLinkProps extends AnchorHTMLAttributes {}

  const props = defineProps<SocialLinkProps>()
</script>

<template>
  <a
    class="hover:bg-secondary-800 flex items-center justify-center gap-3 rounded py-1 px-3 text-sm font-semibold transition-colors"
    href="url"
    target="_blank"
    v-bind="props"
  >
    <slot></slot>
    <ArrowTopRightOnSquareIcon class="w-4" />
  </a>
</template>
