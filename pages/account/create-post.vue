<script setup lang="ts">

  const config = useRuntimeConfig();
  const router = useRouter();

  const apiBase = config.public.apiBase;

  const form = ref({});
  const errors = ref({});

  const handleSubmit = async () => {
    errors.value = {};

    if(!form.value.title) {
      errors.value.title = "Required field";
    }

    if(!form.value.description) {
      errors.value.description = "Required field";
    }

    if(!form.value.author) {
      errors.value.author = "Required field";
    }

    if(Object.entries(errors.value).length > 0) {
      return false;
    }

    const currentDate = new Date().toISOString().slice(0, 10);

    await $fetch('/posts', {
      baseURL: apiBase,
      method: "POST",
      body: {...form.value, created_at: currentDate.toString()},
      onResponse: ({request, response, options}) => {
        if(response.ok) {
          alert("Post created");
          router.push("/");
        }
      },
      onResponseError: ({ request, response, options }) => {
          if(!response.ok) {
            console.error(response.statusText, response.status);
            alert(response.status + ' ' + response.statusText);
          }
      }
    })

  }
</script>

<template>
  <div class="container">
    <form method="post" @submit.prevent="handleSubmit">
        <div class="input-group">
          <label>Title</label>
          <div class="flex flex-col">
            <input type="text" name="title" v-model="form.title" />
            <span class="error-hint" v-if="errors && errors.title">{{errors.title}}</span>
          </div>
        </div>

      <div class="input-group">
        <label>Description</label>
        <div class="flex flex-col">
          <textarea name="description" rows="3" v-model="form.description"></textarea>
          <span class="error-hint" v-if="errors && errors.description">{{errors.description}}</span>
        </div>
      </div>

      <div class="input-group">
        <label>Author</label>
        <div class="flex flex-col">
          <input type="text" name="author" v-model="form.author" />
          <span class="error-hint" v-if="errors && errors.author">{{errors.author}}</span>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>