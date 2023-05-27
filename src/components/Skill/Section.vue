<template>
  <section class="flex w-full flex-col lg:w-1/2">
    <SkillContainer>
      <template #title>Desenvolvimento</template>

      <template #skills>
        <li class="font-semibold">
          <IconNuxt class="fill-zenith h-6 w-fit" />
          Nuxt 3
        </li>

        <li class="font-semibold">
          <IconVue class="fill-zenith h-5 w-fit" />
          Vue 3
        </li>

        <li class="font-semibold">
          <IconTailwindCSS class="fill-zenith h-6 w-fit" />
          TailwindCSS
        </li>

        <li class="font-semibold">
          <IconTypeScript class="fill-zenith h-5 w-fit" />
          TypeScript
        </li>
      </template>
    </SkillContainer>

    <SkillContainer>
      <template #title>Aprendendo</template>

      <template #skills>
        <li class="font-semibold">
          <IconPrisma class="fill-zenith h-6 w-fit" />
          Prisma
        </li>
      </template>
    </SkillContainer>

    <p class="text-dawn text-sm font-medium leading-relaxed">
      Além disso, possuo conhecimento em tecnologias como: Pinia, Prisma,
      Back-end as a Service ou BaaS (Firebase e Supabase), React, Radix UI,
      Styled Components, Sass.
    </p>
  </section>
</template>
