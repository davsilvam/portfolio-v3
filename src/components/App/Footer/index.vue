<script lang="ts" setup>
  import { ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <footer
    class="text-zenith fixed bottom-0 flex w-full justify-end p-10 text-sm max-md:hidden"
  >
    <div class="flex items-center gap-10">
      <a
        class="flex items-center gap-3 font-semibold"
        href="https://github.com/davsilvam"
        target="_blank"
      >
        <IconGitHub class="w-4" />
        Github
        <ExternalLink class="w-[14px]" />
      </a>

      <a
        class="flex items-center gap-3 font-semibold"
        href="https://www.linkedin.com/in/davsilvam/"
        target="_blank"
      >
        <IconLinkedin class="w-4" />
        Linkedin
        <ExternalLink class="w-[14px]" />
      </a>
    </div>
  </footer>
</template>
