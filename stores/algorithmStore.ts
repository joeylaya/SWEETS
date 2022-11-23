import { FilterType, IAlgorithm, IAlgorithmComplexity, IAlgorithmType, IFilters } from "~~/types";

export const useAlgorithmStore = defineStore('algorithm', {
  state: () => ({
    algorithms: Array<Object>() as Array<IAlgorithm>,
    algorithmComplexities: Array<Object>() as Array<IAlgorithmComplexity>,
    algorithmTypes: Array<Object>() as Array<IAlgorithmType>,
    algorithmFilters: Object() as IFilters
  }),

  actions: {
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
      const algorithmsByAlgorithmTypes = this.algorithms.filter(e => {
        algorithmTypeIds.includes(e.algorithmTypeId)
      })
      return algorithmsByAlgorithmTypes
    },

    getAlgorithmsByIds(ids: Array<number>) {
      let algorithmsByIds = Array<Object>() as Array<IAlgorithm>
      for (const id of ids) {
        algorithmsByIds.push(
          this.algorithms.find(e => e.id == id)!
        )
      }
      return algorithmsByIds
    },

    getAlgorithmTypesByIds(ids: Array<number>) {
      let algorithmTypesByIds = Array<Object>() as Array<IAlgorithmType>
      for (const id of ids) {
        algorithmTypesByIds.push(
          this.algorithmTypes.find(e => e.id == id)!
        )
      }
      return algorithmTypesByIds
    }

  }
})
