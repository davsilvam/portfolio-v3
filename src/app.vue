<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />

    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />

    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Italiana&display=swap"
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
    @apply bg-secondary-800;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-secondary-700;
  }
</style>
