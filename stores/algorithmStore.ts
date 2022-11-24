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
    // GET ALL
    async getAllAlgorithms() {
      const algorithms = await $fetch('api/Algorithm')
      this.algorithms = algorithms as Array<Algorithm>
      return this.algorithms
    },

    async getAllAlgorithmTypes() {
      const algorithmTypes = await $fetch('api/AlgorithmType')
      this.algorithmTypes = algorithmTypes as Array<AlgorithmType>
      return this.algorithmTypes
    },

    async getAllAlgorithmRelations() {
      const algorithm_algorithmTypes = await $fetch('api/Algorithm_AlgorithmType')
      this.algorithmRelations.algorithmType = algorithm_algorithmTypes as Array<Algorithm_AlgorithmType>
      return this.algorithmRelations
    }
  }

})
