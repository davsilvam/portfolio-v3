<template>


  <div
    class="text-zenith relative flex min-h-full w-full flex-col items-center justify-center md:mt-52"
  >
    <main
      class="text-zenith relative flex h-full w-full items-start justify-end px-8 max-lg:flex-col max-lg:gap-6 max-md:pt-36 max-md:pb-28 md:px-20"
    >
      <h1
        class="font-italiana top-52 left-20 pb-10 text-6xl font-bold lg:fixed lg:z-10 xl:text-8xl"
      >
        Habilidades
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
