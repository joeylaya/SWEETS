<script setup>
import { useApplicationStore } from '~~/stores/applicationStore';

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

// Get storage URL
const config = useRuntimeConfig()
const storageUrl = config.storageUrl

// Get title from type
const title = convertSlugToTitle(props.type)

</script>

<template>
  <section
    class="max-w-78 p-4 rounded-xl flex flex-col gap-4"
    :class="expanded ? 'bg-white' : ''"
  >
    <header
      class="h-4 flex gap-2 place-items-center"
    >
      <h4
        class="font-header font-semibold"
        :class="expanded ? 'text-primary-500' : ''"
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
      class="flex flex-wrap gap-2"
    >
      <div
        v-for="filter in filters"
        :key="filter.id"
      >
        <ApplicationFilterButton :="filter" :type="type" />
      </div>
    </div>
  </section>
</template>
