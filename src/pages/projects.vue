<script lang="ts" setup>
  const { t } = useLang()
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-full w-full items-center justify-center pb-20 md:mt-52"
  >
    <main
      class="text-secondary-50 relative flex h-full w-full items-start justify-end px-8 max-lg:flex-col max-lg:gap-6 max-md:pt-36 max-md:pb-28 md:px-20"
    >
      <div
        class="top-52 left-20 flex flex-col items-start pb-10 lg:fixed lg:z-10"
      >
        <h1>
          <div class="flex items-center gap-3">
            <span class="text-secondary-50 text-lg font-semibold">
              {{ t('a_little') }}
            </span>
            <hr class="border-secondary-50 w-28 flex-1 md:w-36" />
          </div>

          <strong class="font-italiana text-7xl font-bold md:text-8xl">
            {{ t('projects') }}
          </strong>
        </h1>

        <p class="text-secondary-50 mt-6 lg:max-w-xl">
          {{ t('projects_about') }}
        </p>

        <p class="text-secondary-300 mt-5 mb-3 text-sm font-semibold">
          {{ t('github_cta') }}
        </p>

        <SocialLink href="https://github.com/davsilvam?tab=repositories">
          <IconGitHub class="w-4" /> <span>GitHub</span>
        </SocialLink>
      </div>

      <ProjectCardContainer />
    </main>
  </div>
</template>
