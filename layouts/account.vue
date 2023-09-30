<script setup lang="ts">

</script>

<template>
  <div class="container">
    <AppHeader />
    <nav>
      <ul>
        <li><a href="#">Update Profile</a> </li>
        <li><a href="#">view Profile</a> </li>
      </ul>
    </nav>

    <div class="content">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.content {
  min-height: 400px;
}
</style>