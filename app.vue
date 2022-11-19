<script setup>
import { useGlobalStore } from './stores/globalStore';
import { storeToRefs } from 'pinia';
useHead({
  link: [
    { rel:"icon", href:"/favicon.ico" },
    { rel:"preconnect", href:"https://fonts.googleapis.com" },
    { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:true },
    { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Questrial&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" }
  ]
})

const globalStore = useGlobalStore()
const { darkMode } = storeToRefs(globalStore)
</script>

<template>
  <div class="w-full min-w-screen h-full min-h-screen font-body" :class="darkMode ? 'dark text-neutral-100 bg-neutral-900' : 'text-neutral-600 bg-neutral-50'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
