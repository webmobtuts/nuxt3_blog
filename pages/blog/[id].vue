<script setup lang="ts">
  import {useRoute} from "vue-router";

  const route = useRoute();

  console.log(route.params.id);
</script>

<template>
  <div>
    Single Post page {{route.params.id}}
  </div>
</template>

<style scoped>

</style>