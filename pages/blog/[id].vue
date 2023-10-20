<script setup lang="ts">
  import {useRoute} from "vue-router";

  definePageMeta({
    pageTransition: false,
    layoutTransition: false
  })

  const config = useRuntimeConfig();
  const route = useRoute();

  const apiBase = config.public.apiBase;

  const {data: post, pending, error, refresh} = await useAsyncData(`posts_p${route.params.id}`, () => $fetch(`${apiBase}/posts/${route.params.id}`));

  const refetchData = async () => {
      await refresh();
  }
</script>

<template>
  <div v-if="pending">
    Loading post...
  </div>
  <div v-else-if="error" class="text-red-400">
    <span class="fas fa-exclamation-circle"></span> Error loading results
  </div>

  <div v-else>

    <Head>
      <Title>{{post.title}}</Title>
      <Meta name="description" :content="post.description" />
      <Meta name="keywords" :content="post.title" />
      <Meta name="og:description" :content="post.description" />
      <Meta name="og:title" :content="post.title" />
      <Meta name="og:url" :content="'http://localhost:3000/blog/'+post.id" />
    </Head>

    <article class="card mb-7 mt-1" >
      <h1 class="text-3xl mb-2 text-center">{{post.title}}</h1>
      <p>{{post.description}}</p>
      <span class="block text-sm mt-2 mb-2">Created by: {{post.author}}</span>
      <time class="block text-sm text-blue-500"><span class="fas fa-clock"></span> {{post.created_at}}</time>
    </article>
  </div>

  <a href="#" @click.prevent="refetchData">Refresh Post</a>
</template>

<style scoped>

</style>