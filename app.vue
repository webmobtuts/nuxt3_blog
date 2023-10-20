<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
  useHead({
    title: 'Home',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - My Blog Portal` : 'My Blog Portal';
    },
    meta: [
      {
        name: "description",
        content: "My blog portal Home page"
      },
      {
        name: "keywords",
        content: "blog, articles, portal, green energy"
      },
    ]
  });
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>