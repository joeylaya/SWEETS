<script setup>
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

const config = useRuntimeConfig()
const storageUrl = config.storageUrl

const globalStore = useGlobalStore()
const { isDarkMode } = storeToRefs(globalStore)

const mode = computed(() => {
  if (isDarkMode.value) return "Dark"
  return "Light"
})
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-self-center outline">
    <div class="p-4 flex justify-end">
      <DarkModeButton />
    </div>
    <main class="w-full h-full">
      <slot />
    </main>
  </div>
</template>
