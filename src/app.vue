<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <Link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Italiana&display=swap"
      rel="stylesheet"
    />
    <Title> David Silva </Title>
  </Head>

  <div class="bg-secondary-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.3s ease-out;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
