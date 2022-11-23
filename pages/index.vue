<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

const config = useRuntimeConfig()
const storageUrl = config.storageUrl

const globalStore = useGlobalStore()

const { darkMode } = storeToRefs(globalStore)
const mode = computed(() => {
  if (darkMode.value) return "Dark"
  return "Light"
})

const topics = await globalStore.getAllTopics()
</script>

<template>
  <section class="min-w-screen min-h-screen flex flex-col gap-8 justify-center place-items-center">
    <header class="flex flex-col place-items-center">
        <img
          :src="`${storageUrl}/imgs/sweetsHorizontal${mode}.png`"
          alt=""
          class="w-full sm:(w-5/6) max-w-148"
        >
        <h2 class="header-2 font-primary">Software Engineer Energy & Time Saver</h2>
      </header>
      <div class="flex flex-wrap gap-4 justify-center bg-gradient-4 bg-clip-text">
        <div v-for="topic in topics" :key="topic.id">
          <NuxtLink :to="`/${topic.slug}`">
            <button
              class="
                font-header font-semibold text-lg sm:(text-xl)
                bg-transparent text-transparent
                px-4 py-2 rounded-xl
              "
            >
              {{ topic.name }}
            </button>
          </NuxtLink>
        </div>
        <!-- v-for Topic -->
      </div>
    </section>
</template>
