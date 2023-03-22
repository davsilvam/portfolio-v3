<template>
  <Head>
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
