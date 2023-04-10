<template>
  <div class="border-secondary-50 flex w-full justify-between border-t py-8">
    <h3 class="text-xl font-bold"><slot name="title"></slot></h3>
    <ul
      class="flex w-1/2 flex-col gap-6 [&>li]:flex [&>li]:items-center [&>li]:gap-2"
    >
      <slot name="skills"></slot>
    </ul>
  </div>
</template>
