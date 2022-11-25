<script setup lang="ts">
import { useApplicationStore } from '~~/stores/applicationStore';
import { useAlgorithmStore } from '~~/stores/algorithmStore';
import { Filters, Subtopic } from '~~/types';
import { storeToRefs } from 'pinia';

// Get data
const applicationStore = useApplicationStore()
const algorithmStore = useAlgorithmStore()
const { applications } = storeToRefs(applicationStore)
const { algorithms, algorithmTypes } = storeToRefs(algorithmStore)

// Define filter options
const filterOptions = reactive({
  algorithm: algorithms.value.map(e => {
    return {id: e.id, name: e.name!}
  }),
  algorithmType: algorithmTypes.value.map(e => {
    return {id: e.id, name: e.name!}
  })
})

// Reset filters
const resetFilters = () => {
  applicationStore.activeApplicationFilters = Filters
  applicationStore.expandedApplicationFilterType = String() as Subtopic
  applicationStore.updateFilteredApplications()
}
</script>

<template>
  <div>
    <section class="flex gap-4 place-items-start">
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
  </div>
</template>
