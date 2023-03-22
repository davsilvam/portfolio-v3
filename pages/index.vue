<script lang="ts" setup>
  const { t } = useLang()
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-screen w-full items-center justify-center"
  >
    <main class="flex h-full items-center justify-center">
      <div class="flex flex-col items-center">
        <h1 class="text-5xl font-bold">David Silva</h1>
        <BaseOutlineTitle
          class="pt-2 text-center text-3xl max-sm:w-[80%] md:text-4xl"
        >
          {{ t('job') }}
        </BaseOutlineTitle>
        <ul
          class="flex items-center justify-center gap-6 pt-4 font-[Poppins] text-lg font-medium md:gap-12"
        >
          <li>
            {{ t('updated') }}
          </li>
          <li>
            {{ t('simple') }}
          </li>
          <li>
            {{ t('organized') }}
          </li>
        </ul>
      </div>
    </main>

    <NavigationLink name="skills" direction="bottom" path="/skills" />
    <NavigationLink name="about_me" direction="left" path="/about-me" />
    <NavigationLink name="projects" direction="right" path="/projects" />
  </div>
</template>
