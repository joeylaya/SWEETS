<script setup>
// Props
const props = defineProps(['id', 'name', 'slug'])
</script>

<template>
<section class="flex flex-col gap-2">
  <header class="px-2 py-1 rounded-lg flex gap-4 place-items-center hover:(bg-gradient-4 text-transparent bg-clip-text)">
    <NuxtLink :to="`/${slug}`">
      <button>
        <h2 class="font-header font-bold">{{ name }}</h2>
      </button>
    </NuxtLink>
  </header>
</section>
</template>
