<script setup>
// Props
const props = defineProps(['id', 'name', 'slug'])

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl
</script>

<template>
<section class="flex flex-col gap-2 group">
  <header class="px-2 py-1 rounded-lg flex gap-4 place-items-center group-hover:text-primary-400">
    <NuxtLink :to="`/${slug}`">
      <button class="flex gap-4 text-left place-items-center">
        <div class="w-10 h-10 opacity-50 group-hover:opacity-100">
          <img
            :src="`${storageUrl}/icons/${slug}.svg`"
            alt=""
          >
        </div>
        <h2 class="font-header font-semibold">{{ name }}</h2>
      </button>
    </NuxtLink>
  </header>
</section>
</template>
