<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto my-4 px-4">
    <AppHeader />
    <nav>
      <ul>
        <li><a href="#">Update Profile</a> </li>
        <li><a href="#">view Profile</a> </li>
      </ul>
    </nav>

    <div class="content my-5 h-screen">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>

</style>