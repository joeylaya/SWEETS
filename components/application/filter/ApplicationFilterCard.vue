<script setup>
import { useApplicationStore } from '~~/stores/applicationStore';
import { convertSlugToTitle } from '~~/composables/convertSlugToTitle';

// Props
const props = defineProps(['filters', 'type'])

// Handle filter type
const applicationStore = useApplicationStore()
const toggleApplicationFilterType = () => {
  applicationStore.toggleApplicationFilterType(props.type)
}

const expanded = computed(() => {
  return applicationStore.expandedApplicationFilterType == props.type
})

const filterCount = computed(() => {
  return applicationStore.activeApplicationFilters[props.type].length
})

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Get title from type
const title = computed(() => {
  return convertSlugToTitle(props.type)
})
</script>

<template>
  <section
    class="relative max-w-78 flex flex-col"
  >
    <header
      class="relative h-6 px-4 py-4 sm:(h-8 py-6) flex gap-2 justify-between place-items-center rounded-t-xl"
      :class="expanded ? 'bg-white dark:(bg-neutral-600) w-58 z-5' : 'z-3'"
    >
      <div v-if="filterCount > 0 && !expanded" class="absolute top-0 left-1 sm:(top-2) bg-primary-200 rounded-full w-4 h-4 flex flex-none justify-center place-items-center">
        <p class="font-header text-xs text-primary-500 font-bold">{{filterCount}}</p>
      </div>
      <h4
        class="text-sm sm:(text-md) font-header font-semibold"
        :class="expanded ? 'text-primary-500 dark:(text-neutral-900)' : ''"
      >
        {{ title }}
      </h4>
      <button
        class="w-6 h-6 flex flex-none justify-center place-items-center"
        @click="toggleApplicationFilterType"
      >
        <img
          :src="`${storageUrl}/icons/caret.svg`"
          :class="expanded ? 'transform rotate-180' : ''"
          alt=""
        >
      </button>      
    </header>
    <div
      v-if="expanded"
      class="absolute top-full flex flex-wrap gap-2 bg-white dark:(bg-neutral-600) w-full rounded-b-xl px-4 pb-4 shadow-2xl z-4"
    >
      <div
        v-for="filter in filters"
        :key="filter.id"
      >
        <ApplicationFilterButton :id="filter.id" :name="filter.name" :type="type" />
      </div>
    </div>
  </section>
</template>
