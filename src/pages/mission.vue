<script lang="ts" setup>
import { BadgeCheck, Rocket, Zap } from 'lucide-vue-next'
</script>

<template>
  <div
    class="relative flex min-h-full w-full flex-col items-center justify-center text-zenith md:mt-52"
  >
    <main
      class="flex h-full w-full flex-col gap-32 px-8 pb-20 text-zenith max-lg:flex-col max-md:pb-28 max-md:pt-36 md:px-20"
    >
      <h1>
        <span class="md:text-lg font-medium text-dawn">Quero te oferecer soluções</span>
        <ul class="space-y-3 pt-3 text-4xl md:text-6xl font-semibold">
          <li>Rápidas</li>
          <li>Modernas</li>
          <li>Organizadas</li>
        </ul>
      </h1>

      <section
        class="flex items-stretch justify-between gap-10 text-zenith max-lg:flex-col"
      >
        <div class="flex flex-1 flex-col gap-3">
          <Zap class="h-7 w-7" />

          <h2 class="text-lg font-semibold">
            Rápidas
          </h2>
          <p class="text-sm leading-loose text-dawn">
            A otimização desempenha um papel fundamental no desenvolvimento de
            software. Meus projetos são cuidadosamente construídos com
            tecnologias de alta velocidade, garantindo uma experiência
            excepcional em termos de performance.
          </p>

          <div class="flex w-full items-center gap-5 fill-dawn">
            <IconNuxt class="h-6 w-6 hover:fill-zenith" />
            <IconNext class="h-6 w-6 hover:fill-zenith" />
            <IconVue class="h-6 w-6 hover:fill-zenith" />
          </div>
        </div>

        <div class="flex flex-1 flex-col gap-3">
          <Rocket class="h-7 w-7" />

          <h2 class="text-lg font-semibold">
            Modernas
          </h2>
          <p class="text-sm leading-loose text-dawn">
            Como desenvolvedor, mantenho um constante empenho em estudar
            tecnologias que atendam de forma ideal às expectativas dos clientes.
            Nesse sentido, dou grande importância à utilização de tecnologias
            que se integram harmoniosamente e oferecem bons resultados.
          </p>

          <div class="flex w-full items-center gap-5 fill-dawn">
            <IconTailwindCSS class="h-6 w-6 hover:fill-zenith" />
            <IconPrisma class="h-6 w-6 hover:fill-zenith" />
          </div>
        </div>

        <div class="flex flex-1 flex-col gap-3">
          <BadgeCheck class="h-7 w-7" />

          <h2 class="text-lg font-semibold">
            Organizadas
          </h2>
          <p class="text-sm leading-loose text-dawn">
            Dedico uma atenção significativa à qualidade do software e à sua
            estrutura, empregando tecnologias que facilitam a padronização do
            código. Esse enfoque simplifica a colaboração e contribui para a
            criação de uma experiência de desenvolvimento altamente gratificante
            e eficiente.
          </p>

          <div class="flex w-full items-center gap-5 fill-dawn">
            <IconTypeScript class="h-6 w-6 hover:fill-zenith" />
            <IconEslint class="h-6 w-6 hover:fill-zenith" />
            <IconPrettier class="h-6 w-6 hover:fill-zenith" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
  section:has(.card:hover) .card:not(:hover) {
    opacity: 0.6;
    transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  }
</style>
