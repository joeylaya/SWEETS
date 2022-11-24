<script setup lang="ts">
import { storeToRefs } from 'pinia';
import NavHeaderDesktop from '~~/components/nav/NavHeaderDesktop.vue';
import NavHeaderMobile from '~~/components/nav/NavHeaderMobile.vue';
import { useGlobalStore } from '~~/stores/globalStore';

const globalStore = useGlobalStore()
const { screenSize } = storeToRefs(globalStore)
</script>

<template>
  <div class="flex flex-col gap-4 sm:(flex-row gap-0)">
    <NavHeaderMobile v-if="screenSize == 'xs'" class="z-10" />
    <NavHeaderDesktop v-else class="z-10" />
    <div class="z-0 flex flex-col w-full">
      <!-- DarkModeButton -->
      <main class="w-full px-4 mt-16 flex flex-col place-items-start gap-8 sm:(px-8 mt-0 gap-12)">
        <BaseHeader />
        <slot />
      </main>      
    </div>
  </div>
</template>
