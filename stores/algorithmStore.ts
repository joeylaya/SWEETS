import {
  Algorithm,
  AlgorithmType,  
  Algorithm_AlgorithmType,
  Subtopic,
  Relations,
  Filters
} from "~~/types"

export const useAlgorithmStore = defineStore('algorithm', {
  state: () => ({
    algorithms: Array<Object>() as Array<Algorithm>,
    algorithmTypes: Array<Object>() as Array<AlgorithmType>,
    algorithmRelations: Relations,
    expandedAlgorithmFilterType: String() as Subtopic,
    activeAlgorithmFilters: Filters,
    filteredAlgorithms: Array<Object>() as Array<Algorithm>,
  }),

  actions: {

  }
})
