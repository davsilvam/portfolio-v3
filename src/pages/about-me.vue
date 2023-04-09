<script lang="ts" setup>
  const { t } = useLang()
</script>

<template>
  <div
    class="text-secondary-50 relative flex h-full w-full items-center justify-center"
  >
    <main
      class="text-secondary-50 relative grid w-full grid-cols-12 items-center justify-center max-lg:gap-6 max-md:pt-36 max-md:pb-28"
    >
      <section
        class="col-span-5 col-start-2 lg:col-span-4 lg:col-start-2 xl:col-start-3"
      >
        <div
          class="bg-secondary-100 h-32 w-32 rounded-full lg:h-40 lg:w-40"
        ></div>
        <BaseOutlineTitle class="pt-8 text-4xl uppercase lg:text-6xl">
          {{ t('who_is') }}
        </BaseOutlineTitle>
        <h2 class="text-6xl font-bold uppercase lg:text-8xl">David?</h2>
        <h3 class="text-secondary-100 pt-3 pl-1 max-lg:hidden">
          {{ t('presentation_subtitle') }}
        </h3>
      </section>

      <section
        class="col-span-10 col-start-2 flex w-full flex-col gap-3 md:col-span-8 md:col-start-2 lg:col-span-4 lg:col-start-7 lg:items-start"
      >
        <p>{{ t('presentation_1') }}</p>
        <p>{{ t('presentation_2') }}</p>
        <p>{{ t('presentation_3') }}</p>

        <ul class="flex flex-wrap items-center gap-8 pt-4 self-end">
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
