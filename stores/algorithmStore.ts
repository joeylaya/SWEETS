import {
  Algorithm,
  Algorithm_AlgorithmType,
  AlgorithmComplexity,
  AlgorithmType,
  Filters,
  FilterType
} from "~~/types"

export const useAlgorithmStore = defineStore('algorithm', {
  state: () => ({
    algorithms: Array<Object>() as Array<Algorithm>,
    algorithm_algorithmTypes: Array<Object>() as Array<Algorithm_AlgorithmType>,
    algorithmComplexities: Array<Object>() as Array<AlgorithmComplexity>,
    algorithmTypes: Array<Object>() as Array<AlgorithmType>,
    algorithmFilters: Object() as Filters
  }),

  actions: {
    async getAllAlgorithms() {
      if (this.algorithms.length > 0) return this.algorithms
      const { data } = await useFetch('/api/Algorithm')
      this.algorithms = data.value as Array<Algorithm>
      return this.algorithms
    },

    async getAllAlgorithm_AlgorithmTypes() {
      if (this.algorithmTypes.length > 0) return this.algorithmTypes
      const { data } = await useFetch('/api/AlgorithmType')
      this.algorithmTypes = data.value as Array<AlgorithmType>
      return this.algorithmTypes
    },

    async getAllAlgorithmComplexity() {
      if (this.algorithmComplexities.length > 0) return this.algorithmComplexities
      const { data } = await useFetch('/api/AlgorithmComplexity')
      this.algorithmComplexities = data.value as Array<AlgorithmComplexity>
      return this.algorithmComplexities
    },

    toggleAlgorithmFilters(filterType: FilterType, id: number) {
      const index =
        this.algorithmFilters[`${filterType}Ids`]
          .findIndex(e => e == id)

      if (index >= 0) {
        this.algorithmFilters[`${filterType}Ids`]
          .splice(index, 1)
      } else {
        this.algorithmFilters[`${filterType}Ids`]
          .push(id)
      }
    },

    getAlgorithmsByAlgorithmTypes(id?: number) {
      if (id) this.toggleAlgorithmFilters("algorithmType", id)
      const { algorithmTypeIds } = this.algorithmFilters
      if (algorithmTypeIds.length == 0) return this.algorithms
      const algorithmsByAlgorithmTypes = this.algorithms.filter(algorithm => {() => {
        let algorithmIds = []
        for (const algorithm_algorithmTypes of this.algorithm_algorithmTypes) {
          if (algorithmTypeIds.includes(algorithm_algorithmTypes.algorithmTypeId)) {
            algorithmIds.push(algorithm_algorithmTypes.algorithmId)
          }
        }
        return algorithmIds.includes(algorithm.id)
      }})
      return algorithmsByAlgorithmTypes
    },

    getAlgorithmsByIds(ids: Array<number>) {
      let algorithmsByIds = Array<Object>() as Array<Algorithm>
      for (const id of ids) {
        algorithmsByIds.push(
          this.algorithms.find(e => e.id == id)!
        )
      }
      return algorithmsByIds
    },

    getAlgorithmTypesByIds(ids: Array<number>) {
      let algorithmTypesByIds = Array<Object>() as Array<AlgorithmType>
      for (const id of ids) {
        algorithmTypesByIds.push(
          this.algorithmTypes.find(e => e.id == id)!
        )
      }
      return algorithmTypesByIds
    }

  }
})
