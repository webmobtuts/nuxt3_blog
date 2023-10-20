<script setup lang="ts">
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <article class="card mb-7 mt-1">
    <h3 class="text-xl mb-2"><NuxtLink :to="'/blog/' + post.id">{{post.title}}</NuxtLink></h3>
    <p class="text-sm">{{post.description.substring(0, 200)}}...</p>
    <span class="block text-sm mt-2 mb-2">Created by: {{post.author}}</span>
    <time class="block text-sm text-blue-500"><span class="fas fa-clock"></span> {{post.created_at}}</time>
    <NuxtLink :to="'/blog/' + post.id">Read more</NuxtLink>
  </article>
</template>

<style scoped>

</style>