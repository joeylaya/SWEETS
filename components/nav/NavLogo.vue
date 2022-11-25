<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Handle dark mode and nav expansion
const globalStore = useGlobalStore()
const { isDarkMode, isNavExpanded } = storeToRefs(globalStore) 
const mode = ref('Light')
watchEffect(() => {
  if (isDarkMode.value) mode.value = 'Dark'
  else mode.value = 'Light'
})
</script>

<template>
  <div class="w-1/3 sm:(w-3/4) p-2">
    <NuxtLink to="/">
      <img :src="`${storageUrl}/imgs/sweetsHorizontal${mode}.png`" :class="isNavExpanded ? '' : 'sm:(hidden)'" alt="">
      <img :src="`${storageUrl}/imgs/sweetsVertical${mode}.png`" class="hidden" :class="isNavExpanded ? '' : 'sm:(block)'" alt="">
    </NuxtLink>
  </div>
</template>
