<script lang="ts" setup>
import { ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <footer
    class="fixed bottom-0 flex w-full justify-end p-10 text-sm text-zenith max-md:hidden"
  >
    <div class="flex items-center gap-10">
      <a
        href="https://github.com/davsilvam"
        target="_blank"
        class="flex items-center gap-3 font-semibold"
      >
        <IconGitHub class="w-4 fill-zenith" />
        Github
        <ExternalLink class="w-[14px]" />
      </a>

      <a
        href="https://www.linkedin.com/in/davsilvam/"
        target="_blank"
        class="flex items-center gap-3 font-semibold"
      >
        <IconLinkedin class="w-4 fill-zenith" />
        Linkedin
        <ExternalLink class="w-[14px]" />
      </a>
    </div>
  </footer>
</template>
