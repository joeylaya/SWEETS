<script setup>
import { convertSlugToTitle } from '~~/composables/convertSlugToTitle';

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Get title from routh path
const route = useRoute()
const title = computed(() => {
  return convertSlugToTitle(route.path.slice(1))
})
</script>

<template>
  <header class="w-full h-12 sm:(h-24) flex gap-8 justify-start place-items-center">
    <NuxtLink to="/">
      <button class="flex gap-2 place-items-center bg-neutral-200 dark:bg-neutral-600 hover:bg-primary-100 p-2 rounded-lg">
        <div class="w-4 h-4">
          <img
            :src="`${storageUrl}/icons/caret.svg`"
            class="transform rotate-90"
            alt=""
          />          
        </div>
        <h5 class="font-header font-medium text-xs uppercase">Back to All</h5>
      </button>
    </NuxtLink>
    <div class="p-2 bg-gradient-4 bg-clip-text text-transparent flex flex-col justify-end">
      <h1 class="font-header font-extrabold text-3xl sm:(text-5xl)">{{ title }}</h1>
    </div>
  </header>
</template>
