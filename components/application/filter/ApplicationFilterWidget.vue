<script setup lang="ts">
import { useGlobalStore } from '~~/stores/globalStore';
import { useApplicationStore } from '~~/stores/applicationStore';
import { useAlgorithmStore } from '~~/stores/algorithmStore';
import { Filters, Subtopic } from '~~/types';
import { storeToRefs } from 'pinia';

const applicationStore = useApplicationStore()
const algorithmStore = useAlgorithmStore()

const { applications } = storeToRefs(applicationStore)
const { algorithms, algorithmTypes } = storeToRefs(algorithmStore)

const filterOptions = reactive({
  applications: applications.value,
  algorithms: algorithms.value,
  algorithmTypes: algorithmTypes.value
})

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

// Reset filters
const resetFilters = () => {
  applicationStore.activeApplicationFilters = Filters
  applicationStore.expandedApplicationFilterType = String() as Subtopic
}
</script>

<template>
  <section v-if="mounted" class="flex gap-4 place-items-start">
    <div
      v-for="filterOption, filterType in filterOptions"
      :key="filterType"
    >
      <ApplicationFilterCard :filters="filterOption" :type="filterType" />
    </div>
    <button
      class="h-12"
      @click="resetFilters"
    >
      <h4 class="text-sm uppercase">Reset Filters</h4>
    </button>
  </section>
</template>
