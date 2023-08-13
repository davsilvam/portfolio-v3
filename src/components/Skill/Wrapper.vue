<template>
  <div class="flex flex-1 flex-col gap-3">
    <slot name="icon" />

    <h2 class="text-lg font-semibold">
      <slot name="title" />
    </h2>

    <p class="text-sm leading-loose text-dawn">
      <slot name="description" />
    </p>

    <div class="flex w-full items-center gap-5 fill-dawn">
      <slot name="stacks" />
    </div>
  </div>
</template>
