<script setup>
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

// Get nav expansion
const globalStore = useGlobalStore()
const { isNavExpanded } = storeToRefs(globalStore)
</script>

<template>
<section
  class="
    relative py-4 min-h-screen h-full
  "
  :class="isNavExpanded ? 'min-w-54 max-w-1/6 flex flex-col shadow-xl' : 'min-w-18 max-w-1/20'"
>
  <div
    class="flex justify-center place-items-center"
    :class="isNavExpanded ? '' : 'flex-col gap-4'"
  >
    <NavLogo />
    <NavButton />    
  </div>
  <NavBar v-if="isNavExpanded" />
</section>
</template>
