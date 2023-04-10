<script lang="ts" setup>
  const { t } = useLang()
</script>

<template>
  <div
    class="text-secondary-50 relative flex w-full items-center justify-center md:h-screen"
  >
    <main
      class="text-secondary-50 relative flex w-full justify-center px-8 max-lg:flex-col max-lg:gap-6 max-md:pt-36 max-md:pb-28 md:px-16 lg:items-center lg:px-28 xl:px-52"
    >
      <section class="flex flex-col lg:w-1/2">
        <nuxt-img
          src="https://avatars.githubusercontent.com/u/101468533?v=4"
          class="h-32 w-32 rounded-full lg:h-40 lg:w-40"
        />
        <BaseOutlineTitle class="pt-8 text-4xl uppercase lg:text-6xl">
          {{ t('who_is') }}
        </BaseOutlineTitle>
        <h2 class="text-6xl font-bold uppercase lg:text-8xl">David?</h2>
        <h3 class="text-secondary-100 pt-3 pl-1 max-lg:hidden">
          {{ t('presentation_subtitle') }}
        </h3>
      </section>

      <section class="flex flex-col gap-3 lg:w-1/2 lg:items-start">
        <p>{{ t('presentation_1') }}</p>
        <p>{{ t('presentation_2') }}</p>
        <p>{{ t('presentation_3') }}</p>

        <ul class="flex flex-wrap items-center gap-8 self-end pt-4">
          <li>
            <SocialLink url="https://github.com/davsilvam">
              <IconGitHub class="w-5" /> <span>GitHub</span>
            </SocialLink>
          </li>
          <li>
            <SocialLink url="https://www.linkedin.com/in/davsilvam">
              <IconLinkedin class="w-5" /> <span>Linkedin</span>
            </SocialLink>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
