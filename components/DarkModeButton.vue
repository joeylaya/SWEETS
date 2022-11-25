<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
const globalStore = useGlobalStore()
const toggleDarkMode = () => {
  globalStore.toggleDarkMode()
}
</script>

<template>
  <button
    class="w-12 h-6 p-1 rounded-full flex place-items-center justify-start bg-neutral-300 dark:(justify-end bg-neutral-800)"
    @click="toggleDarkMode"
  >
    <div 
      class="w-5 h-5 rounded-full bg-gradient-4 opacity-80 dark:(opacity-100)"
    >
    </div>
  </button>
</template>
