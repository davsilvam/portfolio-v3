<template>
  <div
    class="relative flex min-h-full w-full flex-col items-center justify-center text-zenith md:mt-52"
  >
    <main
      class="flex h-full w-full flex-col gap-32 px-8 pb-20 text-zenith max-lg:flex-col max-md:pb-28 max-md:pt-36 md:px-20"
    >
      <h1>
        <span class="font-medium text-dawn md:text-lg">Quero te oferecer soluções</span>
        <ul class="space-y-3 pt-3 text-4xl font-semibold md:text-6xl">
          <li>Rápidas</li>
          <li>Modernas</li>
          <li>Organizadas</li>
        </ul>
      </h1>

      <SkillSection />
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
