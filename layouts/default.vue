<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';
import NavHeaderDesktop from '~~/components/nav/NavHeaderDesktop.vue';
import NavHeaderMobile from '~~/components/nav/NavHeaderMobile.vue';

const globalStore = useGlobalStore()
const { screenSize } = storeToRefs(globalStore)

const route = useRoute()

const isApplicationPage = computed(() => {
  return route.path == '/application'
}) 
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
        <div v-if="!isApplicationPage" class="bg-primary-200 px-6 py-4 rounded-xl">
          <h2 class="font-header font-semibold text-2xl sm:(text-3xl) text-primary-500">Coming Soon!</h2>
        </div>
        <slot />
      </main>      
    </div>
  </div>
</template>
