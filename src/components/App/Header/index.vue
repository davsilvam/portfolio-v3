<template>
  <header class="fixed top-0 z-10 flex w-full items-center justify-between p-8">
    <nuxt-img class="h-6" src="/logo.png" alt="David's Logo" />

    <nav class="flex items-center gap-20">
      <AppHeaderNavigationContainer />
      <AppHeaderLanguageSwitcher />
    </nav>
  </header>
</template>
