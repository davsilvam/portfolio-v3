<template>
  <div
    class="flex w-full justify-between gap-3 border-t border-zenith py-8 max-sm:flex-col max-sm:items-center"
  >
    <h2 class="text-xl font-bold">
      <slot name="title" />
    </h2>

    <ul
      class="flex flex-col gap-6 sm:w-1/2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 max-sm:[&>li]:justify-center"
    >
      <slot name="skills" />
    </ul>
  </div>
</template>
