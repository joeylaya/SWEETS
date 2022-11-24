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
    fixed w-full 
    flex justify-center place-items-center
  "
>
  <NavLogo />
  <NavButton />
  <NavBar v-if="isNavExpanded" />
</section>
</template>
