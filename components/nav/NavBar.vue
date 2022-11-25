<script setup>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~~/stores/globalStore';

const globalStore = useGlobalStore()
const { topics } = storeToRefs(globalStore)
</script>

<template>
<div
  class="
    absolute p-2 top-full right-0 sm:(relative px-4 py-8 top-auto right-auto)
    flex flex-col gap-8
  "
>
  <nav
    class="flex flex-col gap-4"
  >
    <div
      v-for="topic in topics"
      :key="topic.id"
    >
      <NavSection :="topic" />
    </div>
  </nav>
  <div class="m-4 flex justify-end sm:(hidden)">
    <DarkModeButton />
  </div>
</div>
</template>
