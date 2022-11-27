import {
  DataStructure,
  Relations
} from "~~/types";

export const useDataStructureStore = defineStore('dataStructure', {
  state: () => ({
    dataStructures: Array<Object>() as Array<DataStructure>  
  }),

  actions: {

  }
})
