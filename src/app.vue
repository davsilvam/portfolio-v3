<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />

    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      cross-origin="anonymous"
    />

    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@300;400;500;700;900&family=Sora:wght@500;600;700&display=swap"
    />

    <Title>David Silva</Title>
  </Head>

  <div class="bg-night font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  ::-webkit-scrollbar {
    width: 0.2rem;
    @apply bg-night;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-dawn/30;
  }
</style>
