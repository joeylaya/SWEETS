<script setup>
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
</script>

<template>
  <div class="min-w-screen min-h-screen flex flex-col">
    <!-- TheDarkModeButton -->
    <main>
      <slot />
    </main>
  </div>
</template>
