<script lang="ts" setup>
  const { t } = useLang()
</script>

<template>
  <section class="flex w-full flex-col lg:w-1/2">
    <SkillContainer>
      <template #title>Desenvolvimento</template>
      <template #skills>
        <li>
          <IconNuxt class="fill-secondary-50 h-6 w-fit" />
          <span>Nuxt 3</span>
        </li>
        <li>
          <IconVue class="fill-secondary-50 h-5 w-fit" />
          <span>Vue 3</span>
        </li>
        <li>
          <IconTailwindCSS class="fill-secondary-50 h-6 w-fit" />
          <span>TailwindCSS</span>
        </li>
        <li>
          <IconTypeScript class="fill-secondary-50 h-5 w-fit" />
          <span>TypeScript</span>
        </li>
      </template>
    </SkillContainer>

    <SkillContainer>
      <template #title>Aprendendo</template>
      <template #skills>
        <li>
          <IconPrisma class="fill-secondary-50 h-6 w-fit" />
          <span>Prisma</span>
        </li>
      </template>
    </SkillContainer>

    <p class="text-secondary-300 text-sm">
      {{ t('extra_skills') }}
    </p>
  </section>
</template>
