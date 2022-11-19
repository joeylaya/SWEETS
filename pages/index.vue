<script setup>
import { useGlobalStore } from '~~/stores/globalStore';
import { storeToRefs } from 'pinia';

const config = useRuntimeConfig()
const storageUrl = config.storageUrl

const globalStore = useGlobalStore()
const { darkMode } = storeToRefs(globalStore)

const mode = computed(() => {
  if (darkMode.value) return "Dark"
  return "Light"
})
</script>

<template>
  <section>
    <header class="flex flex-col place-items-center">
        <img
          :src="`${storageUrl}/imgs/sweetsHorizontal${mode}.png`"
          alt=""
          class="w-full sm:(w-5/6) max-w-148"
        >
        <h2 class="header-2 font-primary">Software Engineer Energy & Time Saver</h2>
      </header>
      <div class="flex flex-wrap">
        <!-- v-for Topic -->
      </div>
    </section>
</template>
