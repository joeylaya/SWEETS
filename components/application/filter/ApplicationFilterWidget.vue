<script setup lang="ts">
import { useApplicationStore } from '~~/stores/applicationStore';
import { useAlgorithmStore } from '~~/stores/algorithmStore';
import { useDataStructureStore } from '~~/stores/dataStructureStore';
import { usePythonStore } from '~~/stores/pythonStore';
import { ApplicationFilters, Subtopic } from '~~/types';
import { storeToRefs } from 'pinia';

// Get data
const applicationStore = useApplicationStore()
const algorithmStore = useAlgorithmStore()
const dataStructureStore = useDataStructureStore()
const pythonStore = usePythonStore()
const { algorithms, algorithmTypes } = storeToRefs(algorithmStore)
const { dataStructures } = storeToRefs(dataStructureStore)
const { dataTypes } = storeToRefs(pythonStore)

// Define filter options
const filterOptions = reactive({
  algorithm: algorithms.value.map(e => {
    return {id: e.id, name: e.name!}
  }),
  algorithmType: algorithmTypes.value.map(e => {
    return {id: e.id, name: e.name!}
  }),
  dataStructure: dataStructures.value.map(e => {
    return {id: e.id, name: e.name!}
  }),
  dataType: dataTypes.value.map(e => {
    return {id: e.id, name: e.name!}
  }),
})

// Reset filters
const resetFilters = () => {
  applicationStore.resetFilters()
}
</script>

<template>
  <section class="relative flex flex-wrap gap-x-4 gap-y-2 place-items-start pb-8 sm:(pb-0)">
    <div
      v-for="filterOption, filterType in filterOptions"
      :key="filterType"
    >
      <ApplicationFilterCard :filters="filterOption" :type="filterType" />
    </div>
    <button
      class="absolute bottom-0 h-6 px-4 py-4 sm:(relative h-8 py-6) flex place-items-center"
      @click="resetFilters"
    >
      <h4 class="text-xs sm:text-sm uppercase">Reset Filters</h4>
    </button>
  </section>
</template>
