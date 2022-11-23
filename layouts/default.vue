<script setup>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~~/stores/globalStore';

const globalStore = useGlobalStore()
const { screenSize } = storeToRefs(globalStore)
</script>

<template>
  <div class="flex flex-col gap-4 sm:(flex-row gap-0)">
    <!-- NavHeader -->
    <div class="z-0 flex flex-col w-full">
      <!-- DarkModeButton -->
      <main class="px-4 mt-16 flex flex-col place-items-start gap-8 sm:(px-8 mt-0 gap-12)">
        <!-- BaseHeader -->
        <slot />
      </main>      
    </div>
  </div>
</template>
