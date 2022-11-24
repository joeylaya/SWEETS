<script setup>
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Handle nav expansion
const globalStore = useGlobalStore()
const { isNavExpanded } = storeToRefs(globalStore)
const toggleActive = () => globalStore.toggleNavBar()
</script>

<template>
<button
  class="
    top-50% right-0
    w-6 min-w-6 h-6 min-h-6 m-2 p-1 rounded-full
    flex justify-center place-items-center
    bg-neutral-200/50
    hover:(bg-primary-100)
    dark:(bg-neutral-600 hover:(bg-neutral-700))
  "
  :class="isNavExpanded ? 'absolute sm:(left-0)' : 'absolute sm:(relative)'"
  @click="toggleActive"
>
  <img
    :src="`${storageUrl}/icons/caret.svg`"
    alt=""
    :class="isNavExpanded ? 'transform rotate-180 sm:(rotate-90)' : 'transform sm:(-rotate-90)'"
  >
</button>
</template>
