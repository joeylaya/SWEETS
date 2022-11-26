<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useApplicationStore } from '~~/stores/applicationStore';

// Props
const props = defineProps(['id', 'name', 'url', 'slug', 'priority', 'relations'])

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Handle application expansion
const applicationStore = useApplicationStore()
const { expandedApplication } = storeToRefs(applicationStore)

const expanded = computed(() => {
  return expandedApplication.value == props.id
})
const content = ref()
const toggleApplication = async () => {
  if (!expanded.value) {
    console.log('if')
    content.value = await queryContent('application').where({
        _path: `/application/${props.slug}`
      }).findOne()
    console.log(content.value)
  }
  applicationStore.toggleApplication(props.id)
}
</script>

<template>
  <section
    class="
      relative flex flex-col justify-between rounded-2xl
      bg-white shadow-xl shadow-primary-300/15
      dark:(bg-neutral-800 shadow-none)
    "
    :class="expanded ? 'max-w-128' : 'max-w-94'"
  >
    <button
      v-if="expanded"
      class="absolute w-3 h-3 m-3 top-0 right-0"
      @click="toggleApplication"
    >
      <img
          :src="`${storageUrl}/icons/x.svg`"
          alt=""
      />      
    </button>
    <div class="p-6 flex flex-col">
      <header class="text-left flex gap-2 place-items-start">
        <a :href="url" target="_blank">
          <button class="w-6 h-6 p-1 m-1 flex-none justify-center place-items-center rounded-lg bg-primary-200 dark:bg-neutral-500">
            <img
              :src="`${storageUrl}/icons/leetcode.svg`"
              alt=""
              class="opacity-50"
            />           
          </button>
        </a>        
        <h2 class="font-header font-semibold text-2xl sm:(text-3xl) text-primary-400">{{ name }}</h2>
      </header>
      <div
        class="py-2 flex gap-3"
        :class="expanded ? 'flex-row' : 'flex-col'"
      >
        <div
          v-for="(relationType, type) in relations"
          :key="type"
        >
          <ApplicationDisplayRelation :relationType="relationType" :type="type" />
        </div>
      </div>
 
      <ContentRenderer v-if="expanded" :value="content" />
    
    </div>
    <button
      v-if="!expanded"
      class="
        w-full h-8 rounded-b-2xl flex justify-end place-items-center 
        bg-gradient-4 opacity-40 hover:opacity-100
        dark:(opacity-60 hover:opacity-100)
      "
      @click="toggleApplication"
    >
      <div class="w-6 h-6 m-1 p-1 flex">
        <img
          :src="`${storageUrl}/icons/caret.svg`"
          alt=""
          class="transform -rotate-90"
        />
      </div>
    </button>
  </section>
</template>
