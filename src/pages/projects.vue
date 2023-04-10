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
      <h1
        class="font-italiana top-52 left-20 pb-10 text-6xl font-bold lg:fixed lg:z-10 xl:text-7xl"
      >
        {{ t('projects') }}
      </h1>
      <ProjectCardContainer />
    </main>
  </div>
</template>
