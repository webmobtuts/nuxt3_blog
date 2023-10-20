<script setup lang="ts">

</script>

<template>
  <header class="flex mb-10">
    <div class="flex-1">
      <NuxtLink to="/"><img src="/imgs/logo.png" width="120px" height="100px" alt="logo" /></NuxtLink>
    </div>
    <nav class="grow">
      <ul class="list-none flex gap-4">
        <li><NuxtLink to="/"><span class="fas fa-house"></span> Home</NuxtLink></li>
        <li><NuxtLink to="/blog" >Blog</NuxtLink></li>
        <li><NuxtLink to="/about" >About</NuxtLink></li>

      </ul>
    </nav>

    <div class="flex-none user-links">
      <NuxtLink to="/account/create-post" class="mx-3 btn-primary-outline">Post Article</NuxtLink>
      <NuxtLink to="/account/profile"><span class="fas fa-user"></span> Profile</NuxtLink>
    </div>
  </header>
</template>

<style scoped>

</style>