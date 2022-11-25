<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';
import NavHeaderDesktop from '~~/components/nav/NavHeaderDesktop.vue';
import NavHeaderMobile from '~~/components/nav/NavHeaderMobile.vue';

const globalStore = useGlobalStore()
const { screenSize } = storeToRefs(globalStore)
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 sm:(flex-row gap-0)">
    <NavHeaderMobile v-if="screenSize == 'xs'" class="z-10" />
    <NavHeaderDesktop v-else class="z-10" />
    <div class="z-0 flex flex-col w-full">
      <div class="hidden sm:(p-4 block flex justify-end)">
        <DarkModeButton />
      </div>
      <main class="w-full h-full flex flex-col place-items-start gap-2 mt-16 sm:(px-8 mt-0 gap-4)">
        <BaseHeader />
        <slot />
      </main>      
    </div>
  </div>
</template>
