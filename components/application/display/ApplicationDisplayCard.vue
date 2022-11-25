<script setup>
import { useApplicationStore } from '~~/stores/applicationStore';

// Props
const props = defineProps(['id', 'name', 'url', 'slug', 'priority', 'relations'])

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Handle application expansion
const expandApplication = () => {
  console.log("expand ",props.name)
}
</script>

<template>
  <button
    class="max-w-74 flex flex-col justify-between bg-white rounded-2xl shadow-xl shadow-primary-300/15 group"
    @click="expandApplication"
  >
    <div class="p-6 flex flex-col gap-1">
      <header class="text-left">
        <h3 class="font-header font-semibold text-lg sm:(text-xl) text-primary-400">{{ name }}</h3>
      </header>
      <div class="flex flex-col gap-3">
        <div
          v-for="(relationType, type) in relations"
          :key="type"
        >
          <ApplicationDisplayRelation :relationType="relationType" :type="type" />
        </div>
      </div>      
    </div>
    <div class="w-full h-8 rounded-b-2xl flex justify-end place-items-center bg-gradient-4 opacity-40 group-hover:opacity-100">
      <div class="w-6 h-6 m-1 p-1 flex">
        <img
          :src="`${storageUrl}/icons/caret.svg`"
          alt=""
          class="transform -rotate-90"
        >
      </div>
    </div>
  </button>
</template>
