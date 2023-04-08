<script lang="ts" setup>
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
  import { AnchorHTMLAttributes } from 'vue'

  interface SocialLinkProps extends AnchorHTMLAttributes {
    url: string
  }

  const props = defineProps<SocialLinkProps>()
</script>

<template>
  <a
    class="flex items-center gap-2 text-sm"
    :href="url"
    target="_blank"
    v-bind="props"
  >
    <slot></slot>
    <ArrowTopRightOnSquareIcon class="w-4" />
  </a>
</template>
