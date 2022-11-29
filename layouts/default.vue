<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';
import NavHeaderDesktop from '~~/components/nav/NavHeaderDesktop.vue';
import NavHeaderMobile from '~~/components/nav/NavHeaderMobile.vue';

const globalStore = useGlobalStore()
const { screenSize, isNavExpanded } = storeToRefs(globalStore)

const route = useRoute()

const isApplicationPage = computed(() => {
  return route.path == '/application' || route.path == '/application/'
}) 
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 sm:(flex-row gap-0)">
    <NavHeaderMobile v-if="screenSize == 'xs'" class="z-10" />
    <NavHeaderDesktop v-else class="z-10" />
    <div v-if="isNavExpanded && screenSize == 'xs'" class="absolute w-full h-full z-9 backdrop-filter backdrop-blur-sm"></div>
    <div class="z-0 flex flex-col w-full">
      <div class="hidden sm:(p-4 block flex justify-end)">
        <DarkModeButton />
      </div>
      <main class="w-full h-full flex flex-col place-items-start gap-8 mt-16 px-8 sm:(mt-0)">
        <BaseHeader />
        <div v-if="!isApplicationPage" class="bg-primary-200 px-6 py-4 rounded-xl">
          <h2 class="font-header font-semibold text-2xl sm:(text-3xl) text-primary-500">Coming Soon!</h2>
        </div>
        <slot />
      </main>      
    </div>
  </div>
</template>
