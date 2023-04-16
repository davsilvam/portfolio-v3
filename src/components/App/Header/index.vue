<template>
  <header
    class="bg-secondary-900 fixed top-0 z-10 flex w-full items-center justify-between px-8 py-8 md:px-16 xl:px-24"
  >
    <nuxt-img class="h-6" src="/logo.png" alt="David's Logo" />

    <div class="flex items-center gap-10">
      <AppHeaderNavigationContainer />
      <AppHeaderLanguageSwitcher />
    </div>
  </header>
</template>
