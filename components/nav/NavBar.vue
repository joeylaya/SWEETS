<script setup>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~~/stores/globalStore';

const globalStore = useGlobalStore()
const { topics } = storeToRefs(globalStore)
</script>

<template>
<div
  class="
    absolute p-4 top-full right-0 sm:(relative px-4 py-8 top-auto right-auto)
    flex flex-col gap-2 sm:(gap-8)
    bg-neutral-100/80 dark:(bg-neutral-900/80) rounded-xl shadow-xl sm:(bg-transparent shadow-none)
  "
>
  <nav
    class="flex flex-col gap-2 sm:(gap-4)"
  >
    <div
      v-for="topic in topics"
      :key="topic.id"
    >
      <NavSection :="topic" />
    </div>
  </nav>
  <div class="m-2 flex justify-end sm:(hidden)">
    <DarkModeButton />
  </div>
</div>
</template>
