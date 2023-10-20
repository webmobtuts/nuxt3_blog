<script setup lang="ts">
    const config = useRuntimeConfig();

    const apiBase = config.public.apiBase;

    const {data: posts, pending, error} = await useFetch(`${apiBase}/posts`, {
      query: {
        _sort: 'id',
        _order: 'desc',
        _limit: 10
      }
    });

    useHead({
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'My Blog portal homepage'
        },
        {
          name: 'og:description',
          content: 'My Blog portal homepage'
        },
        {
          name: 'og:title',
          content: 'Homepage'
        }
      ]
    })
</script>

<template>
  <div>
    <h1 class="text-3xl mb-4">Latest Posts</h1>
    <div v-if="pending">
        Loading data...
    </div>
    <div v-else-if="error" class="text-red-400">
        <span class="fas fa-exclamation-circle"></span> Error loading results
    </div>
    <section v-else>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </div>
</template>

<style scoped>

</style>