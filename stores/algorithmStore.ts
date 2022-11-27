import {
  Algorithm,
  AlgorithmType,  
  Relations
} from "~~/types"

export const useAlgorithmStore = defineStore('algorithm', {
  state: () => ({
    algorithms: Array<Object>() as Array<Algorithm>,
    algorithmTypes: Array<Object>() as Array<AlgorithmType>,
    algorithmRelations: Relations
  }),

  actions: {

  }
})
