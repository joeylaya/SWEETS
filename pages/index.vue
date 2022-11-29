<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Get topics and compute dark mode
const globalStore = useGlobalStore()
const { topics, isDarkMode } = storeToRefs(globalStore)
const mode = computed(() => {
  if (isDarkMode.value) return "Dark"
  return "Light"
})
</script>

<template>
  <section class="h-full flex flex-col gap-8 sm:gap-16 justify-center place-items-center">
    <header class="flex flex-col place-items-center gap-2 sm:gap-4 bg-gradient-4 bg-clip-text py-2">
      <img :src="`${storageUrl}/imgs/sweetsHorizontal${mode}.png`" alt="" class="w-full sm:(w-5/6) max-w-148">
      <h1 class="font-header font-extrabold text-3xl sm:(text-5xl) text-transparent text-center">Software Engineer Energy & Time Saver</h1>
    </header>
    <div class="flex flex-wrap gap-4 justify-center">
      <div v-for="topic in topics" :key="topic.id">
        <NuxtLink :to="`/${topic.slug}`">
          <button class="bg-transparent px-2 py-1 sm:(px-4 py-2) rounded-xl flex flex-col gap-1 sm:gap-2 place-items-center group">
            <div class="w-12 h-12 sm:(w-16 h-16) opacity-50 group-hover:opacity-100">
              <img
                :src="`${storageUrl}/icons/${topic.slug}.svg`"
                class="w-full h-full"
                alt=""
              >
            </div>
            <h2 class="font-header font-semibold text-2xl sm:(text-3xl) group-hover:text-primary-400">
              {{ topic.name }}
            </h2>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
