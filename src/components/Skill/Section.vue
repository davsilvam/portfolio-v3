<template>
  <section class="flex w-full flex-col lg:w-1/2">
    <SkillContainer>
      <template #title>
        Desenvolvimento
      </template>

      <template #skills>
        <li class="font-semibold">
          <IconNuxt class="h-6 w-fit fill-zenith" />
          Nuxt 3
        </li>

        <li class="font-semibold">
          <IconVue class="h-5 w-fit fill-zenith" />
          Vue 3
        </li>

        <li class="font-semibold">
          <IconTailwindCSS class="h-6 w-fit fill-zenith" />
          TailwindCSS
        </li>

        <li class="font-semibold">
          <IconTypeScript class="h-5 w-fit fill-zenith" />
          TypeScript
        </li>
      </template>
    </SkillContainer>

    <SkillContainer>
      <template #title>
        Aprendendo
      </template>

      <template #skills>
        <li class="font-semibold">
          <IconPrisma class="h-6 w-fit fill-zenith" />
          Prisma
        </li>
      </template>
    </SkillContainer>

    <p class="text-sm font-medium leading-relaxed text-dawn">
      Além disso, possuo conhecimento em tecnologias como: Pinia, Prisma,
      Back-end as a Service ou BaaS (Firebase e Supabase), React, Radix UI,
      Styled Components, Sass.
    </p>
  </section>
</template>
