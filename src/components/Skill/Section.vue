<script lang="ts" setup>
import { BadgeCheck, Rocket, Zap } from 'lucide-vue-next'
</script>

<template>
  <section
    class="flex items-stretch justify-between gap-10 text-zenith max-lg:flex-col"
  >
    <SkillWrapper>
      <template #icon>
        <Zap class="h-7 w-7" />
      </template>

      <template #title>
        Rápidas
      </template>

      <template #description>
        A otimização desempenha um papel fundamental no desenvolvimento de
        software. Meus projetos são cuidadosamente construídos com
        tecnologias de alta velocidade, garantindo uma experiência
        excepcional em termos de performance.
      </template>

      <template #stacks>
        <IconNuxt class="h-6 w-6 transition hover:fill-zenith" />
        <IconNext class="h-6 w-6 transition hover:fill-zenith" />
        <IconVue class="h-6 w-6 transition hover:fill-zenith" />
        <IconReact class="h-6 w-6 transition hover:fill-zenith" />
      </template>
    </SkillWrapper>

    <SkillWrapper>
      <template #icon>
        <Rocket class="h-7 w-7" />
      </template>

      <template #title>
        Modernas
      </template>

      <template #description>
        Como desenvolvedor, mantenho um constante empenho em estudar
        tecnologias que atendam de forma ideal às expectativas dos clientes.
        Nesse sentido, dou grande importância à utilização de tecnologias
        que se integram harmoniosamente e oferecem bons resultados.
      </template>

      <template #stacks>
        <IconTailwindCSS class="h-6 w-6 transition hover:fill-zenith" />
        <IconPrisma class="h-6 w-6 transition hover:fill-zenith" />
      </template>
    </SkillWrapper>

    <SkillWrapper>
      <template #icon>
        <BadgeCheck class="h-7 w-7" />
      </template>

      <template #title>
        Organizadas
      </template>

      <template #description>
        Dedico uma atenção significativa à qualidade do software e à sua
        estrutura, empregando tecnologias que facilitam a padronização do
        código. Esse enfoque simplifica a colaboração e contribui para a
        criação de uma experiência de desenvolvimento altamente gratificante
        e eficiente.
      </template>

      <template #stacks>
        <IconTypeScript class="h-6 w-6 transition hover:fill-zenith" />
        <IconEslint class="h-6 w-6 transition hover:fill-zenith" />
        <IconPrettier class="h-6 w-6 transition hover:fill-zenith" />
      </template>
    </SkillWrapper>
  </section>
</template>
